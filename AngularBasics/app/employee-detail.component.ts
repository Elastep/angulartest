import { Component, Input } from '@angular/core';
import { Employee } from './employee';
@Component({
    selector: 'my-employee-detail',
    template: `
<div *ngIf="employee">
         <h2>
           Name: {{employee.name}}
         </h2>
         <div>
           <label>id: </label>{{employee.id}}
         </div>
          <div>
           <input [(ngModel)]="employee.name" />
         </div>
        </div>
`
})
export class EmployeeDetailComponent {
    @Input()
    employee: Employee;
}
