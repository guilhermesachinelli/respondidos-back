import { v4 as uuidv4 } from 'uuid';

export class Question {
    constructor(response1,response2,response3,response4, question, id, category, difficulty,correct) {
        this.response1 = response1;
        this.response2 = response2;
        this.response3 = response3;
        this.response4 = response4;
        this.question = question;
        this.id = uuidv4();
        this.category = category;
        this.difficulty = difficulty;
        this.correct = correct;
    }
}
