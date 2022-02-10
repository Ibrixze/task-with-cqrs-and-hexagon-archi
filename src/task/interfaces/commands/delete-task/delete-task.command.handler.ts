import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { TaskRepositoryPort } from "src/task/core/domain/ports/task.repository.port";
import { DeleteTaskCommand } from "./delete-task.command";

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskCommandHandler implements ICommandHandler<DeleteTaskCommand>{
    
    constructor(private readonly repository: TaskRepositoryPort){}
    
    execute(command: DeleteTaskCommand): Promise<any> {
        const { payload } = command;
        return this.repository.deleteTask(payload);
    }   
}