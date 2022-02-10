export class TaskMustHaveAnIdException extends Error{

    constructor(message: string){
        super(message)
    }
}