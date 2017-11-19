import { Component, OnInit } from "@angular/core";
import { Http, Response, Headers } from "@angular/http"
import { Question } from "./Question";
import { Category } from "./Category"
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    selector: 'create',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.css'],
    moduleId: module.id
})
export class CreateComponent {
    private name = 'CreateComponent';
    q: Question;
    form: FormGroup;
    categories: Array<Category>;
    submitted: boolean = false;
    successMessage: String;

    constructor(private _http: Http, private fb: FormBuilder) {
        this.form = fb.group({
            id: [""],
            name: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            asked: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,300}")])],
            category: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])]
        });
        this.categories = new Array();
    }

    ngOnInit() {
        this.collectCategories();
    }

    submitQuestion() {


        
        let question = new Question(
            -1,
            this.form.value.asked,
            false,
            "",
            new Category(this.form.value.category, ""),
            this.form.value.name,
            false,
            this.form.value.email
        );

        var body = JSON.stringify(question);
        var headers = new Headers({ "Content-Type": "application/json" });

        this._http.post("api/question", body, { headers: headers })
            .map(response => response.toString())
            .subscribe(
            retur => {
                
            },
            error => alert(error),
            () => {
                console.log("ferdig post-api/kunde");
                this.submitted = true;
                this.createSuccessMessage();
            }
            );
        
    }

    createSuccessMessage() {
        this.successMessage = "Question successfully submitted. Reply will be sent to " + this.form.value.email;

        this.form.reset();
    }

    collectCategories() {
        this._http.get("api/category/get")
            .map(responseData => {
                let jsonData = responseData.json();
                return jsonData;
            }).subscribe(
            jsonData => {
                if (jsonData) {
                    for (let c of jsonData) {
                        this.categories.push(new Category(
                            c.Id, c.Name
                        ));
                    }
                }
            },
            error => alert(error),
            () => console.log("get question complete")
            );
    }
}

