import {Component, OnInit}  from 'angular2/core';
import {TaskItem}                from 'app/task/taskItem.component';
import {TaskListService}         from 'app/task/taskList.service';
import {Logger} from 'app/logger.service';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
    selector:    'task-list',
    providers:   [TaskListService],
    directives: [TaskItem]
})

@View({
    templateUrl: 'app/task/taskList.component.html',
    directives: [MATERIAL_DIRECTIVES]
})

export class TaskList implements OnInit {
    constructor(private _service: TaskListService){
        //Logger.log('aaa')
    }
    tasks: Array<any>;

    ngOnInit() {
       // Logger.log('aaaaa')
        this.tasks = this._service.getTasks();
        console.log(this.tasks);
    }

    addTask(input: string) {
        console.log(input, this);
        this._service.addTask(input);
    }
}

