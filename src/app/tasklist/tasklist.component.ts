import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StatusType } from '../constants';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit, OnDestroy {

  @Input() statusType: StatusType;
  
  taskList = [];
  subscription: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(){
    this.subscription = this.taskService.getTasks(this.statusType)
      .subscribe(tasks => {
        console.log(tasks);
        return this.taskList = tasks
      });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleStatusChanged({id, status}){
    this.taskService.updateTask(id, status);
  }
}
