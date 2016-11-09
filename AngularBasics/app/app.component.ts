import { Component } from '@angular/core';
import { EmployeesComponent } from './employees.component'

@Component({
    selector: 'my-app',
    template: `<h1>Mcdean Employees Management System</h1>
               <my-employees></my-employees>
`
})
export class AppComponent { }
