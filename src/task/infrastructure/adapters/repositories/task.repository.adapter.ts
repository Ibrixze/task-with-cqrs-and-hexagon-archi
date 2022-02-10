import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskRepositoryPort } from "src/task/core/domain/ports/task.repository.port";
import { Task } from "src/task/core/domain/task";
import { Repository } from "typeorm";
import { TaskMapper } from "../../mappers/task.mapper";
import { TaskEntity } from "../../orm-entites/task.entity";

@Injectable()
export class TypeOrmTaskRepository implements TaskRepositoryPort{

    constructor(@InjectRepository(TaskEntity) private readonly repository: Repository<TaskEntity>){}
    
    async getTask(id: string | number): Promise<any> {
        const task = await this.repository.findOne(id);
        return TaskMapper.toDomain(task);
    }

    async getTasks(): Promise<any[]> {
        const tasks = await this.repository.find();
         
        return TaskMapper.toDomains(tasks);
    }

    async addTask(task: { name: string; description: string; }): Promise<any> {
        const taskCreated = await this.repository.save(task);
        return TaskMapper.toDomain(taskCreated);
    }

    async updateTask(
        id: number, 
        partialTask: { name?: string; description?: string; }
    ): Promise<any> {

            const preloadTask = await this.repository.preload({id: id, ...partialTask});
            if(!preloadTask) 
                throw new Error(`La tache qui fait reference a l'id ${id} n'existe pas`)
            const taskUpdated = await this.repository.save(preloadTask);
            return TaskMapper.toDomain(taskUpdated);
    }
 
    async deleteTask(payload: number[]): Promise<any> {
        const preloadTask = await this.repository.find();
        let tasksToDelete = []
        payload.map((payloadID: number | string) => {
            const t = preloadTask.filter(task => task.id == payloadID);
            return tasksToDelete.push(...t);
        }) 
        // We will returned directly the repository result, because the resource(s)
        // are deleted to the database 
        return await this.repository.remove(tasksToDelete);
    }
}