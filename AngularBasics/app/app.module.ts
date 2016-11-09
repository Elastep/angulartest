

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { DashboardComponent } from './dashboard.component';


import { EmployeeService } from './employee.service';




@NgModule({
    imports:
    [BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'employees',
                component: EmployeesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
        ])],

    declarations: [
        AppComponent,
        EmployeesComponent,
        EmployeeDetailComponent,
        DashboardComponent
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})


export class AppModule { }
