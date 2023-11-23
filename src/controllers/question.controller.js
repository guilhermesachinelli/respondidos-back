import { questions } from "../data/questions.js";
import { Question } from "../models/questions/Question.js"; 
import { QuestionList } from "../models/questions/QuestionList.js";
const questionList = new QuestionList();
questions.map(question => new Question(question.response1,
    question.response2,
    question.response3,
    question.response4,
    question.question,
    question.id,
    question.category, 
    question.difficulty, 
    question.correct)).forEach(question => questionList.addQuestion(question));
const questionsListAndRegistred = questionList;
export const getQuestionss = (req, res) => {
    const questions = questionList.getQuestions();
    const { category, difficulty } = req.query;
    if(category){
        return res.status(200).send(questionsListAndRegistred.getQuestionsByCategory(category));
    }
    if(difficulty){
        return res.status(200).send(questionsListAndRegistred.getQuestionsByDifficulty(difficulty));
    }
    if(category && difficulty){
        return res.status(200).send(questionsListAndRegistred.getQuestionsByCategoryAndDifficulty(category, difficulty));
    }
    if(!questions){
        return res.status(404).send({ message: "Questions not found" });
    }
    return res.status(200).send({message : `Numero de questões cadastradas: ${questionsListAndRegistred.length}`, data: questions});
}
export const getQuestionById = (req, res) => {
    const { id } = req.params;
    const question = questionsListAndRegistred.getQuestionById(id);
    if (!question) {
        return res.status(404).send({ message: "Question not found" });
    }
    return res.status(200).send(question);
}
export const getRandomQuestion = (req, res) => {
    const question = questionsListAndRegistred.getRandomQuestion();
    if (!question) {
        return res.status(404).send({ message: "Question not found" });
    }
    return res.status(200).send(question);
}

export const createQuestion = (req, res) => {
    const { response1,response2,response3,response4, question, category, difficulty } = req.body;
    let  error = "Erro no dados enviados: ";
    let errorCount = 0;
    if(!response1){
        error += "Resposta numero 1  não informado";
        errorCount++;
    }
    if(!response2){
        error += "Resposta numero 2  não informado";
        errorCount++;
    }
    if(!response3){
        error += "Resposta numero 3  não informado";
        errorCount++;
    }
    if(!response4){
        error += "Resposta numero 4  não informado";
        errorCount++;
    }
    if(!question){
        error += "Questão não informada";
        errorCount++;
    }
    if(!category){
        error += "Categoria não informada";
        errorCount++;
    }
    if(!difficulty){
        error += "Dificuldade não informada";
        errorCount++;
    }
    const newQuestion = new Question(response1,response2,response3,response4, question, category, difficulty);
    if(errorCount === 0){
        questionsListAndRegistred.addQuestion(newQuestion);
        return res.status(201).send({message : "Questão cadastrada com sucesso", data: newQuestion});
    }else{
        return res.status(400).send({message: error});
    }
}
export const removeQuestionById = (req, res) => {
    const { id } = req.params;
    const question = questionsListAndRegistred.getQuestionById(id);
    if (!question) {
        return res.status(404).send({ message: "Question not found" });
    }
    questionsListAndRegistred.removeQuestionById(id);
    return res.status(200).send({ message: "Questão removida com sucesso" });
}
export const updateQuestionById = (req, res) => {
    const { id } = req.params;
    const { response1,response2,response3,response4, question, category, difficulty } = req.body;
    const questionToUpdate = questionsListAndRegistred.getQuestionById(id);
    if (!questionToUpdate) {
        return res.status(404).send({ message: "Question not found" });
    }
    let error = "Erro no dados enviados: ";
    let errorCount = 0;
    if(!response1){
        error += "Resposta numero 1  não informado";
        errorCount++;
    }
    if(!response2){
        error += "Resposta numero 2  não informado";
        errorCount++;
    }
    if(!response3){
        error += "Resposta numero 3  não informado";
        errorCount++;
    }
    if(!response4){
        error += "Resposta numero 4  não informado";
        errorCount++;
    }
    if(!question){
        error += "Questão não informada";
        errorCount++;
    }
    if(!category){
        error += "Categoria não informada";
        errorCount++;
    }
    if(!difficulty){
        error += "Dificuldade não informada";
        errorCount++;
    }
    const updateQuestion = questionsListAndRegistred.updateQuestionById(id, response1,response2,response3,response4, question, category, difficulty);
    return res.status(200).send({ message: "Questão atualizada com sucesso", data: updateQuestion });
}