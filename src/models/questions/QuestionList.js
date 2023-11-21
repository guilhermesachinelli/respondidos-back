export class QuestionList {
    constructor() {
        this.questions = [];
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    getQuestionById(id) {
        return this.questions.find(question => question.id === id);
    }
    getQuestions() {
        return this.questions;
    }
    getQuestionsByCategory(category) {
        return this.questions.filter(question => question.category === category);
    }
    getQuestionsByDifficulty(difficulty) {
        return this.questions.filter(question => question.difficulty === difficulty);
    }
    getQuestionsByCategoryAndDifficulty(category, difficulty) {
        return this.questions.filter(question => question.category === category && question.difficulty === difficulty);
    }
    removeQuestionById(id) {
        this.questions = this.questions.filter(question => question.id !== id);
    }
    updateQuestionById(id, response1,response2,response3,response4, question, category, difficulty) {
        const questionToUpdate = this.getQuestionById(id);
        if (questionToUpdate) {
            questionToUpdate.response1 = response1;
            questionToUpdate.response2 = response2;
            questionToUpdate.response3 = response3;
            questionToUpdate.response4 = response4;
            questionToUpdate.question = question;
            questionToUpdate.category = category;
            questionToUpdate.difficulty = difficulty;
        }
    }
}                                                                                                        