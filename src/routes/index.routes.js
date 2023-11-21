import { Router } from "express";
import questionRouter from "./question.routes.js";
import memberRouter from "./members.routes.js";
const router = Router()
router.use("/Question", questionRouter)
router.use("/Members", memberRouter)
router.get("/", (req, res) => {
    return res.status(200).send({ message: "Route is on" });
});
export default router