import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  tasksComplete: boolean;

  checkCompletion(): void{
    this.tasksComplete = this.tasks.every((task) => task.done===true);
  }

  dataResponse(tasks: Task[]): void{
    this.tasks = tasks;
    this.checkCompletion();
  }

  add(taskDesc: string): void{
    console.log(`add ${taskDesc} to the list`)
    this.todoService.addTask(taskDesc)
      .subscribe( tasks =>{
        this.dataResponse(tasks);
      });
  }

  getHeroes(): void{
    this.todoService.getTasks()
      .subscribe(tasks => {
        this.dataResponse(tasks);
      });
  }

  updateCompletion(task: Task): void{
    task.done = !task.done;
    this.checkCompletion();
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
