import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../task.model';
import { error } from 'util';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ITask[] = [];
  filterValue: string = '';

  constructor(private taskService: TaskService) { }

  getFilteredTasks() {
    // console.log(this.filterValue + "kiírja?");
    return this.tasks.filter(
      (item: ITask) => item.message.toLowerCase()
      .includes(this.filterValue.toLowerCase()) || item.name.toLowerCase()
      .includes(this.filterValue.toLowerCase())
    );
  }
  handleDelete(task: ITask) {
    this.taskService.deleteById(task.id).subscribe(
      (params: any) => {
        console.log(params);
      },
      (error: any) => {
        alert(error);
      }
    );
    this.getAll();
  }

  getAll() {
    this.taskService.getAll().subscribe(
      (result: ITask[]) => {
        this.tasks = result;
        console.log(this.tasks);
      },
      (error: any) => {
        alert('Huston, we have a problem!' + error.message);
      }
    );
  }
  ngOnInit() {
    this.getAll();
  }
}