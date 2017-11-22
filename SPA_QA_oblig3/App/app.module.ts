import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create.component';
import { QuestionList } from './list.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-accordion';
import { QuestionsComponent } from './questions.component';
import { SearchPipe } from './SearchPipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpModule, ReactiveFormsModule, AccordionModule, FormsModule,
        RouterModule.forRoot([
            { path: 'list', component: QuestionList },
            { path: 'create', component: CreateComponent },
            { path: 'questions', component: QuestionsComponent }/*,
            { path: '**', component: QuestionList }*/
        ]), 
    ],
    declarations: [QuestionList, CreateComponent, QuestionsComponent, AppComponent, SearchPipe],
    bootstrap: [ AppComponent ]
})

export class AppModule { }