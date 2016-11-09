import { Injectable } from '@angular/core';

import { Employee } from './employee'

import { EMPLOYEES } from './mock-employees'



@Injectable()
export class EmployeeService {
    getEmployees(): Promise<Employee[]> {

        return Promise.resolve(EMPLOYEES);
    }

    getEmployeesSlowly(): Promise<Employee[]> {
        return new Promise<Employee[]>(resolve => setTimeout(resolve, 2000)).then(() => this.getEmployees());
    }
}