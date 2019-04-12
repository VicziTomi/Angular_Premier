import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: ITask;

  @Output()
  delete = new EventEmitter<ITask>();

  sendDelete() {
    this.delete.next(this.task);
  }
  constructor() { }

  ngOnInit() {
  }

}
