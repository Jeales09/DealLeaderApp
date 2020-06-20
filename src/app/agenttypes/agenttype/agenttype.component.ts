import { Component, OnInit } from '@angular/core';
import { AgenttypeService } from 'src/app/shared/agenttype.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenttype',
  templateUrl: './agenttype.component.html',
  styleUrls: ['./agenttype.component.css']
})
export class AgenttypeComponent implements OnInit {
//insert taostr service class
  constructor(private service : AgenttypeService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

resetForm(form? : NgForm){
  if(form!=null)
  form.resetForm();
  this.service.formData = {
    Agent_Type_ID : null,
    Agent_Type_Name : '',
    Agent_Type_Description : '',
  }
}

onSubmit(form : NgForm){
  if(form.value.Agent_Type_ID ==null)
this.insertRecord(form);
else
this.updateRecord(form);
}

insertRecord(form : NgForm){
  if(confirm('Please confirm adding the entered details!'))
this.service.postAgentType(form.value).subscribe(res => {
  this.toastr.success('Inserted Successfully!', 'Agent Type')
  this.resetForm(form);
  this.service.refreshList();
});
}


updateRecord(form: NgForm){
  if(confirm('Are you sure you want to update this record?'))
  this.service.putAgentType(form.value).subscribe(res => {
    this.resetForm(form);
    this.service.refreshList();
});
}

}
