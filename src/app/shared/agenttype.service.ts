import { Injectable } from '@angular/core';
import { Agenttype } from './agenttype.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenttypeService {

  formData : Agenttype;
list : Agenttype[];
  readonly rootURL = "https://localhost:44320/api"

  constructor(private http : HttpClient) { }

  postAgentType(formData : Agenttype){
   return this.http.post(this.rootURL+'/AgentType', formData);

  }


  refreshList(){
    this.http.get(this.rootURL+'/AgentType')
    .toPromise().then(res => this.list = res as Agenttype[]);
  }

  putAgentType(formData : Agenttype){
    return this.http.put(this.rootURL+'/AgentType/'+ formData.Agent_Type_ID, formData);

}

deleteAgentType(id : number){
  return this.http.delete(this.rootURL+'/AgentType/'+ id);
}

}
