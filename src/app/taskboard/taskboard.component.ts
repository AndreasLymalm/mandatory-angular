import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  taskService = new TaskService();
  utilService = new UtilService();
  isFormVisible = false;

  constructor() {}

  toggleForm(){
    this.isFormVisible = !this.isFormVisible
  }

  handleTaskAdded({title, descripton}){
    this.toggleForm();
    this.taskService.addTask(title, descripton);
  }
}
