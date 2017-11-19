"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Question_1 = require("./Question");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Category_1 = require("./Category");
var Hallo = (function () {
    function Hallo(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.message = "HEISANN";
        this.questions = new Array();
    }
    Hallo.prototype.ngOnInit = function () {
        this.collectQuestions();
        /*this.message = "Hei og hå hvor det går!";
        let q1 = new Question();
        q1.answer = "this how you fly";
        q1.answered = true;
        q1.id = 0;
        q1.question = "how i fly";

        let q2 = new Question();
        q2.answer = "this how you buy";
        q2.answered = true;
        q2.id = 1;
        q2.question = "how i buy";

        this.questions.push(q1);
        this.questions.push(q2);*/
    };
    Hallo.prototype.collectQuestions = function () {
        var _this = this;
        this._http.get("api/question/get")
            .map(function (responseData) {
            var jsonData = responseData.json();
            return jsonData;
        }).subscribe(function (jsonData) {
            //this.questions = [];
            if (jsonData) {
                for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
                    var q = jsonData_1[_i];
                    _this.questions.push(new Question_1.Question(q.Number, q.Asked, q.Answered, q.Answer, new Category_1.Category(q.Category.Id, q.Category.Name)));
                }
            }
        }, function (error) { return alert(error); }, function () { return console.log("get question complete"); });
    };
    return Hallo;
}());
Hallo = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "App/test.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], Hallo);
exports.Hallo = Hallo;
//# sourceMappingURL=hello.js.map