import { TaskRepositoryPort } from "./core/domain/ports/task.repository.port"
import { TypeOrmTaskRepository } from "./infrastructure/adapters/repositories/task.repository.adapter"
import { AddTaskCommandHandler } from "./interfaces/commands/add-task/add-task.command.handler"
import { DeleteTaskCommandHandler } from "./interfaces/commands/delete-task/delete-task.command.handler"
import { UpdateTaskCommandHandler } from "./interfaces/commands/update-task/update-task.command.handler"
import { GetAllTaskQueryHandler } from "./interfaces/queries/all-task/get-all-tasks.query.handler"
import { GetTaskQueryHandler } from "./interfaces/queries/get-task/get-task.query.handler"

export const GetAllTasksQueryProvider = {
    provide: GetAllTaskQueryHandler,
    useFactory: (repository: TaskRepositoryPort) => new GetAllTaskQueryHandler(repository),
    inject: [TypeOrmTaskRepository]
}
export const GetTaskQueryProvider = {
    provide: GetTaskQueryHandler,
    useFactory: (repository: TaskRepositoryPort) => new GetTaskQueryHandler(repository),
    inject: [TypeOrmTaskRepository]
}
export const AddTaskCommandProvider = {
    provide: AddTaskCommandHandler,
    useFactory: (repository: TaskRepositoryPort) => new AddTaskCommandHandler(repository),
    inject: [TypeOrmTaskRepository]
}

export const UpdateTaskCommandProvider = {
    provide: UpdateTaskCommandHandler,
    useFactory: (repository: TaskRepositoryPort) => new UpdateTaskCommandHandler(repository),
    inject: [TypeOrmTaskRepository]
}

export const DeleteTaskCommandProvider = {
    provide: DeleteTaskCommandHandler,
    useFactory: (repository: TaskRepositoryPort) => new DeleteTaskCommandHandler(repository),
    inject: [TypeOrmTaskRepository]
}