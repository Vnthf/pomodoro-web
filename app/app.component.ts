import {Component} from 'angular2/core';
import {TaskList} from './task/taskList.component';

@Component({
  selector: 'my-app',
  template: '<task-list></task-list>',
  directives: [TaskList]
})
export class AppComponent { }