import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTasks(): Observable<Task[]>{
    return of(TASKS);
  }
  addTask(todo: string): Observable<Task[]>{
    TASKS.push({id: TASKS.length+1, activity: todo, done: false});
    return of(TASKS);
  }

  constructor() { }
}
