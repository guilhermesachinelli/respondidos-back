import express from "express";
import { config } from "dotenv";
import router from "./routes/index.routes.js";
config();

const port = process.env.PORT || 5005;

const app = express();
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
    return res.status(200).send({ message: "O servidor está funfando" });
});
app.listen(port, () =>
    console.log(`⚡ Server started on http://localhost:${port}`)
);