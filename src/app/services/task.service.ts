import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  } 
  
  deleteTask(task) : Observable<Task>{
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }

  toggleRemainder(task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`,task,httpOptions)
  }

  addTask(task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }
}
