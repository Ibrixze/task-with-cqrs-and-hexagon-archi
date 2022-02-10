import { AddTaskCommandHandler } from "./add-task/add-task.command.handler";
import { DeleteTaskCommandHandler } from "./delete-task/delete-task.command.handler";
import { UpdateTaskCommandHandler } from "./update-task/update-task.command.handler";

export const CommandHandlers = [
    AddTaskCommandHandler,
    UpdateTaskCommandHandler,
    DeleteTaskCommandHandler
]