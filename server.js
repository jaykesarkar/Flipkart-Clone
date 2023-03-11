import mongoose from "mongoose";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: "./config.env" });
// import app from "./app.js";

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", false);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
	})
	.then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});

// Serving Frontend(client)
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html")),
		function (err) {
			res.status(500).send(err);
			console.log(err);
		};
});

// paytm //
export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
(paytmParams["MID"] = process.env.PAYTM_MID),
	(paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE),
	(paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
	(paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
	(paytmParams["ORDER_ID"] = uuid()),
	(paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID),
	(paytmParams["TXN_AMOUNT"] = "100"),
	(paytmParams["CALLBACK_URL"] =
		"http://flipkart-clone-d124.onrender.com/callback");
paytmParams["EMAIL"] = "johnsmith@gmail.com";
paytmParams["MOBILE_NO"] = "1234567852";

// Middlewares
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
// app.use("/api", router);
