import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../constants';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {

  @Output() taskAdded = new EventEmitter();

  constructor() {}

  submit(form){
    this.taskAdded.emit(form.value);
    form.reset();
  }
}
