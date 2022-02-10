import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmTaskRepository } from "./infrastructure/adapters/repositories/task.repository.adapter";
import { TaskEntity } from "./infrastructure/orm-entites/task.entity";
import { CommandHandlers } from "./interfaces/commands";
import { TaskController } from "./interfaces/controllers/task.controller";
import { QueryHandlers } from "./interfaces/queries";
import {
    GetAllTasksQueryProvider,
    GetTaskQueryProvider,
    AddTaskCommandProvider,
    DeleteTaskCommandProvider,
    UpdateTaskCommandProvider
} from "./task-core.providers"



const QueryProviders = [
    GetAllTasksQueryProvider,
    GetTaskQueryProvider
];

const CommandProviders = [
    AddTaskCommandProvider,
    DeleteTaskCommandProvider,
    UpdateTaskCommandProvider
];






@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([TaskEntity])],
    controllers: [TaskController],
    providers: [
        ...QueryHandlers,
        ...CommandHandlers,
        ...QueryProviders,
        ...CommandProviders, 
        TypeOrmTaskRepository
    ]
})
export class TaskModule{}