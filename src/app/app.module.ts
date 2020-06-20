import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenttypesComponent } from './agenttypes/agenttypes.component';
import { AgenttypeComponent } from './agenttypes/agenttype/agenttype.component';
import { AgenttypeListComponent } from './agenttypes/agenttype-list/agenttype-list.component';
import { AgenttypeService } from './shared/agenttype.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenttypesComponent,
    AgenttypeComponent,
    AgenttypeListComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [AgenttypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
