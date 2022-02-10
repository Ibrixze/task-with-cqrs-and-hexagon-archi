import { TaskMustHaveAnIdException } from "./exceptions/task-must-have-an-id.exception";

export class Task{
    private readonly _id: number | string;
    private readonly name: string;
    private readonly description?: string;


    constructor(id: string | number, name: string, description: string){
        this._id = id;
        this.name = name;
        this.description = description;
        this.validate();
        return this
    }

    validate(): void{
        if(this._id === null || undefined)
            // TODO: Create a custom exception who will return the error 
            throw new TaskMustHaveAnIdException('Cette tache n\'est pas valide');
    }


    get getId(){
        return this._id;
    }

    get getName(){
        return this.name;
    }

    get getDescription(){
        return this.description;
    }
}

