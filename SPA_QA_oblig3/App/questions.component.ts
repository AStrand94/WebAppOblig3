import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Question } from "./Question";
import { Category } from "./Category";

@Component({
    selector: 'questions',
    templateUrl: 'questions.component.html',
    styleUrls: [ 'questions.component.css'],
    moduleId: module.id
})
export class QuestionsComponent {
    private name = 'QuestionsComponent';
    public questions: Array<Question> = new Array();
    public categories: Array<Category> = new Array();

    constructor(private _http: Http) { }

    ngOnInit() {
        this.collectQuestions();
    }

    collectQuestions() {
        this._http.get("api/question/get")
            .map(responseData => {
                let jsonData = responseData.json();
                return jsonData;
            }).subscribe(
            jsonData => {
                //this.questions = [];
                if (jsonData) {
                    for (let q of jsonData.Questions) {
                        this.questions.push(new Question(
                            q.Id, q.Asked, q.Answered, q.Answer, q.Category, q.AskedBy, q.IsFAQ, q.Email
                        ));
                    }
                    for (let c of jsonData.Categories) {
                        this.categories.push(new Category(
                            c.Id, c.Name
                        ));
                    }

                    this.mapQuestions();
                }
            },
            error => alert(error),
            () => console.log("get question complete")
            );
    }

    mapQuestions() {
        let qArray = this.questions;
        this.questions.forEach((q) =>
            this.addQuestionToCategory(q)
        );
    }

    addQuestionToCategory(q: Question) {
        var cat = this.categories.find(c => c.Id == q.category.Id);
        if (cat !== undefined) cat.Questions.push(q);
    }
}
