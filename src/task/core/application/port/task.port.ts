export interface TaskPort{
    getTask(id: string): Object;
    getTasks(): Object;
    addTask(task: Object): Object;
    deleteTask(id: number | number[]): Object;
    updateTask(id:number | string, task: Object): Object;
}