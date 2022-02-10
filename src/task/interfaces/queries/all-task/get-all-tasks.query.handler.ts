import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { TaskRepositoryPort } from "src/task/core/domain/ports/task.repository.port";
import { GetAllTaskQuery } from "./get-all-tasks.query";

@QueryHandler(GetAllTaskQuery)
export class GetAllTaskQueryHandler implements IQueryHandler<GetAllTaskQuery>{

    constructor(private readonly repository: TaskRepositoryPort){}

    async execute(query: any): Promise<any> {
        return await this.repository.getTasks()
    }
}