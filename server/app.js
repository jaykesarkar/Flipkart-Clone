import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
import router from "./routes/routes.js";

// Middlewares
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", router);
app.get("/hello", (req, res) => {
	res.send("hiii");
});

export default app;