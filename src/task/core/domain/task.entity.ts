export class TaskEntity{
    private readonly _id: string;
    private readonly name: string;
    private readonly description?: string;


    validate(): void{
        if(this._id !== null)
            return null;
    }


    get getName(){
        return this.name;
    }

    get getDescription(){
        if(this.description !== null)
            return this.description;
        return "Cette tache n'a pas de description";
    }
}

