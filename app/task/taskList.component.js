System.register(['angular2/core', 'app/task/taskItem.component', 'app/task/taskList.service', 'ng2-material/all'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, taskItem_component_1, taskList_service_1, all_1;
    var TaskList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (taskItem_component_1_1) {
                taskItem_component_1 = taskItem_component_1_1;
            },
            function (taskList_service_1_1) {
                taskList_service_1 = taskList_service_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            TaskList = (function () {
                function TaskList(_service) {
                    this._service = _service;
                    //Logger.log('aaa')
                }
                TaskList.prototype.ngOnInit = function () {
                    // Logger.log('aaaaa')
                    this.tasks = this._service.getTasks();
                    console.log(this.tasks);
                };
                TaskList.prototype.addTask = function (input) {
                    console.log(input, this);
                    this._service.addTask(input);
                };
                TaskList = __decorate([
                    core_1.Component({
                        selector: 'task-list',
                        providers: [taskList_service_1.TaskListService],
                        directives: [taskItem_component_1.TaskItem]
                    }),
                    View({
                        templateUrl: 'app/task/taskList.component.html',
                        directives: [all_1.MATERIAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof taskList_service_1.TaskListService !== 'undefined' && taskList_service_1.TaskListService) === 'function' && _a) || Object])
                ], TaskList);
                return TaskList;
                var _a;
            })();
            exports_1("TaskList", TaskList);
        }
    }
});
