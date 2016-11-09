import { Component } from '@angular/core';
import { EmployeesComponent } from './employees.component'

@Component({
    selector: 'my-app',
    template: `
               <h1>{{title}}</h1>
               <nav>
                <a routerLink="/dashboard">Employees Dashboard</a>
                <a routerLink="/employees">Employees</a>
               </nav>
               <router-outlet></router-outlet>
`
})
export class AppComponent {
    title: string = "M.C. Dean Employees on Angular 2";
 }
