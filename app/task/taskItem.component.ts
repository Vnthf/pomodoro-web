import {Component, OnInit}   from 'angular2/core';
import {TaskListService}         from 'app/task/taskList.service';

@Component({
    selector:    'task-item',
    templateUrl: 'app/task/taskItem.component.html',
    providers:   [TaskListService],
    properties: ['task']
})

export class TaskItem implements OnInit {
    constructor(private taskListService: TaskListService){
        //Logger.log('aaa')
    }
}

