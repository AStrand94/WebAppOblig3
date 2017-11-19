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
var http_1 = require("@angular/http");
var Question_1 = require("./Question");
var Category_1 = require("./Category");
var QuestionsComponent = (function () {
    function QuestionsComponent(_http) {
        this._http = _http;
        this.name = 'QuestionsComponent';
        this.questions = new Array();
        this.categories = new Array();
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.collectQuestions();
    };
    QuestionsComponent.prototype.collectQuestions = function () {
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
                    _this.questions.push(new Question_1.Question(q.Id, q.Asked, q.Answered, q.Answer, q.Category, q.AskedBy, q.IsFAQ, q.Email));
                }
                for (var _b = 0, _c = jsonData.Categories; _b < _c.length; _b++) {
                    var c = _c[_b];
                    _this.categories.push(new Category_1.Category(c.Id, c.Name));
                }
                _this.mapQuestions();
            }
        }, function (error) { return alert(error); }, function () { return console.log("get question complete"); });
    };
    QuestionsComponent.prototype.mapQuestions = function () {
        var _this = this;
        var qArray = this.questions;
        this.questions.forEach(function (q) {
            return _this.addQuestionToCategory(q);
        });
    };
    QuestionsComponent.prototype.addQuestionToCategory = function (q) {
        var cat = this.categories.find(function (c) { return c.Id == q.category.Id; });
        if (cat !== undefined)
            cat.Questions.push(q);
    };
    return QuestionsComponent;
}());
QuestionsComponent = __decorate([
    core_1.Component({
        selector: 'questions',
        templateUrl: 'questions.component.html',
        styleUrls: ['questions.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [http_1.Http])
], QuestionsComponent);
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=questions.component.js.map