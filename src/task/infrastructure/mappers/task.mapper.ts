import { Task } from "src/task/core/domain/task";
import { Optional } from "typescript-optional";
import { TaskEntity } from "../orm-entites/task.entity"

type ReturnedTask = {
    id: string | number;
    name : string;
    description: string;
}

export class TaskMapper{

    public static toDomain(taskEntity: TaskEntity): Task{
        const task = new Task(
            taskEntity.id,
            taskEntity.name,
            taskEntity.description
        );
        return task;
    }

    public static toDomains(tasksEntity: TaskEntity[]): Task[]{
        const tasks = new Array<Task>();
        tasksEntity.map(taskEntity => {
            const task = this.toDomain(taskEntity);
            tasks.push(task);
        });
        return tasks; 
    }
}