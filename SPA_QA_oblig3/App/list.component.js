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
var QuestionList = (function () {
    function QuestionList(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.message = "HEISANN";
        this.questions = new Array();
        this.categories = new Array();
    }
    QuestionList.prototype.ngOnInit = function () {
        this.collectQuestions();
    };
    QuestionList.prototype.collectQuestions = function () {
        var _this = this;
        this._http.get("api/question/get")
            .map(function (responseData) {
            var jsonData = responseData.json();
            return jsonData;
        }).subscribe(function (jsonData) {
            //this.questions = [];
            if (jsonData) {
                for (var _i = 0, _a = jsonData.Questions; _i < _a.length; _i++) {
                    var q = _a[_i];
                    if (q.IsFAQ) {
                        _this.questions.push(new Question_1.Question(q.Id, q.Asked, q.Answered, q.Answer, q.Category, q.AskedBy, q.IsFAQ, q.Email));
                    }
                }
                for (var _b = 0, _c = jsonData.Categories; _b < _c.length; _b++) {
                    var c = _c[_b];
                    _this.categories.push(new Category_1.Category(c.Id, c.Name));
                }
                _this.mapQuestions();
            }
        }, function (error) { return alert(error); }, function () { return console.log("get question complete"); });
    };
    QuestionList.prototype.findCategory = function (id) {
        return this.categories.find(function (c) { return c.Id == id; });
    };
    QuestionList.prototype.mapQuestions = function () {
        var _this = this;
        var qArray = this.questions;
        this.questions.forEach(function (q) {
            return _this.addQuestionToCategory(q);
        });
    };
    QuestionList.prototype.addQuestionToCategory = function (q) {
        var cat = this.categories.find(function (c) { return c.Id == q.category.Id; });
        if (cat !== undefined)
            cat.Questions.push(q);
    };
    return QuestionList;
}());
QuestionList = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "list.component.html",
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], QuestionList);
exports.QuestionList = QuestionList;
//# sourceMappingURL=list.component.js.map