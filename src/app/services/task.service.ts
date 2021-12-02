import { Injectable } from '@angular/core';
import { TASKS } from '../mock-test'
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[]{
    return TASKS;
  } 
}
