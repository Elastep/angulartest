
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees.component'
import { EmployeeDetailComponent } from './employee-detail.component'
import {EmployeeService} from './employee.service'


import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent, EmployeesComponent, EmployeeDetailComponent],
  providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})


RouterModule.forRoot([
    {
        path: 'heroes',
        component: EmployeesComponent
    }
])

export class AppModule { }
