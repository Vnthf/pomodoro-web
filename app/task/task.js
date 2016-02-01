System.register([], function(exports_1) {
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(content, createdAt, isCompleted) {
                    this.content = content;
                    this.createdAt = createdAt;
                    this.isCompleted = isCompleted;
                    this.content = content;
                    this.createdAt = createdAt;
                    this.isCompleted = isCompleted;
                }
                return Task;
            })();
            exports_1("Task", Task);
        }
    }
});
