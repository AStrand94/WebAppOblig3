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
var forms_1 = require("@angular/forms");
var CreateComponent = (function () {
    function CreateComponent(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.name = 'CreateComponent';
        this.submitted = false;
        this.form = fb.group({
            id: [""],
            name: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z������\\-. ]{2,30}")])],
            asked: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z������\\-.\n\r ]{2,300}")])],
            category: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])]
        });
        this.categories = new Array();
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.collectCategories();
    };
    CreateComponent.prototype.submitQuestion = function () {
        var _this = this;
        var question = new Question_1.Question(-1, this.form.value.asked, false, "", new Category_1.Category(this.form.value.category, ""), this.form.value.name, false, this.form.value.email);
        var body = JSON.stringify(question);
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        this._http.post("api/question", body, { headers: headers })
            .map(function (response) { return response.toString(); })
            .subscribe(function (retur) {
        }, function (error) { return alert(error); }, function () {
            console.log("ferdig post-api/kunde");
            _this.submitted = true;
            _this.createSuccessMessage();
        });
    };
    CreateComponent.prototype.createSuccessMessage = function () {
        this.successMessage = "Question successfully submitted. Reply will be sent to " + this.form.value.email;
        this.form.reset();
    };
    CreateComponent.prototype.collectCategories = function () {
        var _this = this;
        this._http.get("api/category/get")
            .map(function (responseData) {
            var jsonData = responseData.json();
            return jsonData;
        }).subscribe(function (jsonData) {
            if (jsonData) {
                for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
                    var c = jsonData_1[_i];
                    _this.categories.push(new Category_1.Category(c.Id, c.Name));
                }
            }
        }, function (error) { return alert(error); }, function () { return console.log("get question complete"); });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
        templateUrl: 'create.component.html',
        styleUrls: ['create.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map