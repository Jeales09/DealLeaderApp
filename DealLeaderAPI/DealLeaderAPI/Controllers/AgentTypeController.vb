Imports System.Data
Imports System.Data.Entity
Imports System.Data.Entity.Infrastructure
Imports System.Linq
Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports System.Web.Http.Description
Imports DealLeaderAPI

Namespace Controllers
  Public Class AgentTypeController
    Inherits System.Web.Http.ApiController

    Private db As New DBModel

    ' GET: api/AgentType
    Function GetAgent_Type() As IQueryable(Of Agent_Type)
      Return db.Agent_Type
    End Function


    ' PUT: api/AgentType/5
    <ResponseType(GetType(Void))>
    Function PutAgent_Type(ByVal id As Integer, ByVal agent_Type As Agent_Type) As IHttpActionResult


      If Not id = agent_Type.Agent_Type_ID Then
        Return BadRequest()
      End If

      db.Entry(agent_Type).State = EntityState.Modified

      Try
        db.SaveChanges()
      Catch ex As DbUpdateConcurrencyException
        If Not (Agent_TypeExists(id)) Then
          Return NotFound()
        Else
          Throw
        End If
      End Try

      Return StatusCode(HttpStatusCode.NoContent)
    End Function

    ' POST: api/AgentType
    <ResponseType(GetType(Agent_Type))>
    Function PostAgent_Type(ByVal agent_Type As Agent_Type) As IHttpActionResult


      db.Agent_Type.Add(agent_Type)
      db.SaveChanges()

      Return CreatedAtRoute("DefaultApi", New With {.id = agent_Type.Agent_Type_ID}, agent_Type)
    End Function

    ' DELETE: api/AgentType/5
    <ResponseType(GetType(Agent_Type))>
    Function DeleteAgent_Type(ByVal id As Integer) As IHttpActionResult
      Dim agent_Type As Agent_Type = db.Agent_Type.Find(id)
      If IsNothing(agent_Type) Then
        Return NotFound()
      End If

      db.Agent_Type.Remove(agent_Type)
      db.SaveChanges()

      Return Ok(agent_Type)
    End Function

    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
      If (disposing) Then
        db.Dispose()
      End If
      MyBase.Dispose(disposing)
    End Sub

    Private Function Agent_TypeExists(ByVal id As Integer) As Boolean
      Return db.Agent_Type.Count(Function(e) e.Agent_Type_ID = id) > 0
    End Function
  End Class
End Namespace
