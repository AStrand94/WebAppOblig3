import { Question } from './Question'

export class Category{
    Id: number;
    Name: string;
    public Questions: Array<Question>

    constructor(id:  number, name: string) {
        this.Id = id;
        this.Name = name;
        this.Questions = new Array();
    }
}