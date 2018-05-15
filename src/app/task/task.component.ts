import { Component, Input, Output, EventEmitter} from '@angular/core';
import { StatusType, Task } from '../constants';
import { UtilService } from '../util.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task;
  @Output() statusChanged = new EventEmitter();

  utilService = new UtilService();
  id: Number;
  title: String;
  description: String;
  currentStatusType: StatusType;

  constructor() {}

  ngOnInit(){
    console.log("Init task");
    this.id = this.task.id;
    this.title = this.task.title;
    this.description = this.task.description;
    this.currentStatusType = this.task.status;
  }

  changeStatus(newStatus){
    console.log("Changing: " + newStatus.value);
    this.currentStatusType = newStatus.value;
    this.statusChanged.emit({
      id: this.id, 
      status: newStatus.value
    });
  }
}
