import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TaskRepositoryPort } from "src/task/core/domain/ports/task.repository.port";
import { UpdateTaskCommand } from "./update-task.command";

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskCommandHandler implements ICommandHandler<UpdateTaskCommand>{
    
    constructor(private readonly repository: TaskRepositoryPort){}

    async execute(command: UpdateTaskCommand): Promise<any> {
        const {payloadId, payload} = command;
        return this.repository.updateTask(payloadId, payload);
    }
}