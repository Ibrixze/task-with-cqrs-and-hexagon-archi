import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { TaskRepositoryPort } from "src/task/core/domain/ports/task.repository.port";
import { GetTaskQuery } from "./get-task.query";

@QueryHandler(GetTaskQuery)
export class GetTaskQueryHandler implements IQueryHandler<GetTaskQuery>{
    
    constructor(private readonly repository: TaskRepositoryPort){}
    
    async execute(query: any): Promise<any> {
        const { id } = query
        return await this.repository.getTask(id);
    }
}