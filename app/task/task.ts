export class Task {
    constructor(
        public content:string,
        public createdAt:date,
        public isCompleted:boolean){
        this.content = content;
        this.createdAt = createdAt;
        this.isCompleted = isCompleted;
    }
}

