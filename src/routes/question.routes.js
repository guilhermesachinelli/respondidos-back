import { Router } from "express";
import { getQuestionById, createQuestion, removeQuestionById, updateQuestionById, correctResponse, pagenationQuestions} from "../controllers/question.controller.js";
const questionRouter = Router();
questionRouter.get("/:id", getQuestionById);
questionRouter.post("/", createQuestion)
questionRouter.delete("/:id", removeQuestionById);
questionRouter.put("/:id", updateQuestionById);
questionRouter.post("/correct/:id", correctResponse);
questionRouter.get('/', pagenationQuestions);
export default questionRouter;