import { v4 as uuidv4 } from 'uuid';

export class Question {
    constructor(question, category, difficulty, response1, response2, response3, response4, correct) {
        this.id = uuidv4();
        this.question = question;
        this.category = category;
        this.difficulty = difficulty;
        this.response1 = response1;
        this.response2 = response2;
        this.response3 = response3;
        this.response4 = response4;
        this.correct = correct;
    }
}
