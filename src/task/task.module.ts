import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskOrmEntity } from "./infrastructure/orm-entites/task.orm-entity";
import { TaskEntityRepository } from "./infrastructure/repositories/task.repository";


@Module({
    imports: [TypeOrmModule.forFeature([TaskOrmEntity])], 
    providers: [TaskEntityRepository]

})
export class TaskModule{}