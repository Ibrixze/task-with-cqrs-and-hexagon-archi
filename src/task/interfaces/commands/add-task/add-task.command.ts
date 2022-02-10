import { ICommand } from "@nestjs/cqrs";

export class AddTaskCommand{
    constructor(public readonly payload){}   
}