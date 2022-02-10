import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TaskRepositoryPort } from "src/task/core/domain/ports/task.repository.port";
import { AddTaskCommand } from "./add-task.command";


@CommandHandler(AddTaskCommand)
export class AddTaskCommandHandler implements ICommandHandler<AddTaskCommand>{

    constructor(private readonly repositorty: TaskRepositoryPort){}

   async execute(command): Promise<any> {
        const { payload } = command;
        return await this.repositorty.addTask(payload);
    }
}