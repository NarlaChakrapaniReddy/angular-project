import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="https://employee-management-11ka.onrender.com/employees";
  constructor(private httpClient : HttpClient) { }

  getEmployeeList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  
  }

  createEmployee(employee : Employee):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,employee);
  }
  getEmployeeById(empId : number) : Observable<Employee>{
return this.httpClient.get<Employee>(`${this.baseURL}/${empId}`);
}
updateEmployee(empId:number,employee:Employee):Observable<Employee>{
return this.httpClient.put<Employee>(`${this.baseURL}/${empId}`,employee);
}
deleteEmployeeById(empId:number):Observable<object>{
return this.httpClient.delete<Employee>(`${this.baseURL}/${empId}`);
}
}
