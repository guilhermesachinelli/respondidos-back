import { Router } from "express";
import { getQuestionss , getQuestionById, createQuestion, removeQuestionById, updateQuestionById} from "../controllers/question.controller.js";
const questionRouter = Router();
questionRouter.get("/", getQuestionss );
questionRouter.get("/:id", getQuestionById);
questionRouter.post("/", createQuestion)
questionRouter.delete("/:id", removeQuestionById);
questionRouter.put("/:id", updateQuestionById);
export default questionRouter;