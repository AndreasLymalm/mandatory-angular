import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';

export class TaskService {
  
  // add class properties for:
  //
  // a task id counter
  nextId = 0;
  // an internal array of Task objects
  tasks = [{
    id: 0,
    title: "sdf",
    description: "sdfsdfas",
    status: StatusType.InProgress
  }];
  // an instance of BehaviorSubject
  subject = new BehaviorSubject(this.tasks);

  getTasks(status: StatusType): Observable<Task[]> {
    console.log("Getting tasks");
    // return an observable of a task array, filtered by the passed in status...
    return this.subject.asObservable()
      .map(tasks => tasks.filter(task => task.status === status));
  }

  updateTask(id: number, status: StatusType) {
    console.log("Updating task");
    // complete the code to update a task's status...
    let index = -1;
    let updateTask = this.tasks.find((task, i) => {
      if(task.id === id){
        index = i;
        return true;
      }
      return false;
    });
    updateTask.status = status;
    let firstHalf = this.tasks.slice(0, index);
    let lastHalf = this.tasks.slice(index + 1);

    this.tasks = [
      ...firstHalf,
      updateTask,
      ...lastHalf
    ]
    this.updateSubscribers();
  }

  addTask(title: string, description: string) {
    console.log("Adding task");
    // complete the code to add a task...'
    let newTask = {
      id: ++this.nextId,
      status: StatusType.NotStarted,
      title,
      description
    }

    this.tasks = [
      ...this.tasks,
      newTask
    ]
    this.updateSubscribers();
  }

  updateSubscribers() {
    this.subject.next(this.tasks);
    console.log(this.tasks);
  }
}
