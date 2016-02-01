System.register(['angular2/core', 'app/task/taskList.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, taskList_service_1;
    var TaskItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (taskList_service_1_1) {
                taskList_service_1 = taskList_service_1_1;
            }],
        execute: function() {
            TaskItem = (function () {
                function TaskItem(taskListService) {
                    this.taskListService = taskListService;
                    //Logger.log('aaa')
                }
                TaskItem = __decorate([
                    core_1.Component({
                        selector: 'task-item',
                        templateUrl: 'app/task/taskItem.component.html',
                        providers: [taskList_service_1.TaskListService],
                        properties: ['task']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof taskList_service_1.TaskListService !== 'undefined' && taskList_service_1.TaskListService) === 'function' && _a) || Object])
                ], TaskItem);
                return TaskItem;
                var _a;
            })();
            exports_1("TaskItem", TaskItem);
        }
    }
});
