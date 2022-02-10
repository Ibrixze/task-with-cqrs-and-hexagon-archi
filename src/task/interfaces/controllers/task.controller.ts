import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Response } from "express";
import { AddTaskCommand } from "../commands/add-task/add-task.command";
import { DeleteTaskCommand } from "../commands/delete-task/delete-task.command";
import { UpdateTaskCommand } from "../commands/update-task/update-task.command";
import { GetAllTaskQuery } from "../queries/all-task/get-all-tasks.query";
import { GetTaskQuery } from "../queries/get-task/get-task.query";

@Controller('task')

export class TaskController{

    constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus){}
    
    @Get('/all')
    async getAllTasks(@Res() response: Response){
        return this.queryBus.execute(new GetAllTaskQuery())
            .then(result => response.status(201).json({result}))
            .catch(error => response.status(404).json({message: error}));
    }

    
    @Get('/:id')
    async getTask(@Param('id') id: string, @Res() response: Response){
        return this.queryBus.execute(new GetTaskQuery(id))
            .then(result => response.status(201).json({result}))
            .catch(error => response.status(404).json({message: error}));
    }

    @Post('/add')
    async addTask(@Body() newTask, @Res() response: Response) {
        return this.commandBus.execute(new AddTaskCommand(newTask))
            .then(result => response.status(201).json({result}))
            .catch(error => response.status(404).json({message: error}));
    }       

    @Patch('/update/:id')
    async updateTask(@Param('id') id: string, @Body() partialTask, @Res() response: Response){
        return this.commandBus.execute(new UpdateTaskCommand(parseInt(id), partialTask))
            .then(result => response.status(201).json({result}))
            .catch(error => response.status(404).json({message: error}));
    }

    @Delete('/remove')
    async removeTask(@Query('tasks') query: string, @Res() response: Response) {
         const tasks: number [] = query.split('-').map((t: string) => parseInt(t));
         return this.commandBus.execute(new DeleteTaskCommand(tasks))
            .then(result => response.status(201).json({result}))
            .catch(error => response.status(404).json({message: error}));
    }    

}