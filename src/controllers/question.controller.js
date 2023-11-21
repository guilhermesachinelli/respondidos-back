import { Question } from "../models/questions/Question.js";
import { QuestionList } from "../models/questions/QuestionList.js";
const questionList = new QuestionList();
export const getQuestions = (req, res) => {
    const questions = questionList.getQuestions();
    const { category, difficulty } = req.query;
    if(category){
        return res.status(200).send(questionList.getQuestionsByCategory(category));
    }
    if(difficulty){
        return res.status(200).send(questionList.getQuestionsByDifficulty(difficulty));
    }
    if(category && difficulty){
        return res.status(200).send(questionList.getQuestionsByCategoryAndDifficulty(category, difficulty));
    }
    if(!questions){
        return res.status(404).send({ message: "Questions not found" });
    }
    return res.status(200).send({message : `Numero de questões cadastradas: ${question.length}`, data: questions});
}
export const getQuestionById = (req, res) => {
    const { id } = req.params;
    const question = questionList.getQuestionById(id);
    if (!question) {
        return res.status(404).send({ message: "Question not found" });
    }
    return res.status(200).send(question);
}
