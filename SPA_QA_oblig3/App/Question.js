"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Question = (function () {
    function Question(id, asked, answered, answer, category, askedBy, isFAQ, email) {
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
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.js.map