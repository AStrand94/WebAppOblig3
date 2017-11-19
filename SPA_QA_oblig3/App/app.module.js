"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var create_component_1 = require("./create.component");
var list_component_1 = require("./list.component");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var ngx_accordion_1 = require("ngx-accordion");
var questions_component_1 = require("./questions.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.ReactiveFormsModule, ngx_accordion_1.AccordionModule,
            router_1.RouterModule.forRoot([
                { path: 'list', component: list_component_1.QuestionList },
                { path: 'create', component: create_component_1.CreateComponent },
                { path: 'questions', component: questions_component_1.QuestionsComponent } /*,
                { path: '**', component: QuestionList }*/
            ])
        ],
        declarations: [list_component_1.QuestionList, create_component_1.CreateComponent, questions_component_1.QuestionsComponent, app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map