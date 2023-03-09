import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

const app = express();
import router from "./routes/routes.js";

// Middlewares
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// serving the frontend
app.use(express.static(path.join(_dirname, "./client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(_dirname, "./frontend/build/index.html")),
		function (err) {
			res.status(500).send(err);
		};
});

// Routes
app.use("/", router);

export default app;
