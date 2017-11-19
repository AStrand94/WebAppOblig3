import { Category } from "./Category";

export class Question {
    id: number;
    asked: string;
    answered: boolean;
    answer: string;
    category: Category;
    askedBy: string;
    isFAQ: boolean;
    email: String;

    constructor(id: number, asked: string, answered: boolean, answer: string, category: Category, askedBy: string, isFAQ: boolean, email: String) {
        this.id = id;
        this.asked = asked;
        this.answered = answered;
        this.answer = answer;
        this.category = category;
        this.askedBy = askedBy;
        this.isFAQ = isFAQ;
        this.email = email;

        if (this.answer == "") {
            this.answer = "NOT ANSWERED";
        }
    }
}