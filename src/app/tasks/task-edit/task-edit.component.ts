import { Component, OnInit } from '@angular/core';
import { ITask } from '../task.model';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task: ITask = {} as ITask;

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute, private router: Router) { }

  save() {
    this.taskService.save(this.task).subscribe(
      (saved: ITask) => {
        console.log(saved);
        this.router.navigate(['tasks']);
      },
      (error: any) => {
        console.log(error);
        alert("nem mentett");
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.taskService.getById(params.id).subscribe(
          (task: any) => {
            this.task = task;
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
