System.register(['angular2/core', './task'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_1;
    var TaskListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            }],
        execute: function() {
            TaskListService = (function () {
                function TaskListService() {
                    this._tasks = [
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
                }
                TaskListService.prototype.getTasks = function () {
                    console.log('logger');
                    return this._tasks;
                };
                TaskListService.prototype.addTask = function (text) {
                    var task = new task_1.Task(text, text, true);
                    this._tasks.push(task);
                };
                TaskListService.prototype.updateTask = function (task) {
                };
                TaskListService.prototype.removeTask = function (task) {
                    console.log(task);
                    var index = this._tasks.indexOf(task);
                    console.log(index);
                    this._tasks.splice(index, 1);
                };
                TaskListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TaskListService);
                return TaskListService;
            })();
            exports_1("TaskListService", TaskListService);
        }
    }
});
