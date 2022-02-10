import { ICommand } from "@nestjs/cqrs";

export class UpdateTaskCommand implements ICommand{
    constructor(
        public readonly payloadId: number, 
        public readonly payload: {task?: string, description?:string}
    ){}
}