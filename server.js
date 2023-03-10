import mongoose from "mongoose";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config({ path: "./config.env" });
import app from "./app.js";

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
	})
	.then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`App running on port ${port}...`);
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
		"https://flipkart-clone-d124.onrender.com/callback");
paytmParams["EMAIL"] = "johnsmith@gmail.com";
paytmParams["MOBILE_NO"] = "1234567852";
