import {Injectable} from 'angular2/core';
import {Task} from './task';
import {Logger} from 'app/logger.service';

@Injectable()
export class TaskListService {
    constructor(
        ) { }

    private _tasks:Task[] = [
        {
            content: 'Write Angular 2 Blog',
            createdAt: new Date(),
            isCompleted: false
        },
        {
            content: 'Finish Todo demo',
            createdAt: new Date(),
            isCompleted: false
        },
        {
            content: 'Push source code to Github',
            createdAt: new Date(),
            isCompleted: true
        }
    ];

    getTasks() {
        console.log('logger');
        return this._tasks;
    }

    addTask(text) {
        let task = new Task(text, text, true);
        this._tasks.push(task)
    }

    updateTask(task) {

    }

    removeTask(task) {
        console.log(task);
        var index = this._tasks.indexOf(task);
        console.log(index);
        this._tasks.splice(index, 1);
    }


}
