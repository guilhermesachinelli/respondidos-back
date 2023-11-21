import { Router } from "express";
import { getQuestions , getQuestionById, createQuestion, removeQuestionById, updateQuestionById} from "../controllers/question.controller.js";
const questionRouter = Router();
questionRouter.get("/", getQuestions );
questionRouter.get("/:id", getQuestionById);
questionRouter.post("/", createQuestion)
questionRouter.delete("/:id", removeQuestionById);
questionRouter.put("/:id", updateQuestionById);
export default questionRouter;