import { Task } from "../task";



type PartialTask = {
    name? : string,
    description?: string 
}

type TaskResource = {
    id: string | number;
    name: string;
    description: string;
}

type AddTask = { 
    name: string;
    description: string
}

export interface TaskRepositoryPort{

    getTask(id: string | number): Promise<Task>;
    getTasks(): Promise<Task[]>;
    addTask(task: AddTask): Promise<Task>;
    updateTask(id: string | number, partialTask: PartialTask): Promise<Task>;
    deleteTask(payload: number[] | string[]): Promise<Task>;
}