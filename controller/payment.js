import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantkey } from "../server.js";
import formidable from "formidable";
import https from "https";

export const addPaymentGateway = async (request, response) => {
	try {
		const paytmChecksum = await paytmchecksum.generateSignature(
			paytmParams,
			paytmMerchantkey
		);
		const params = {
			...paytmParams,
			CHECKSUMHASH: paytmChecksum,
		};
		response.json(params);
	} catch (error) {
		console.log(error, "error");
	}
};

export const paymentResponse = (request, response) => {
	const form = new formidable.IncomingForm();
	const paytmCheckSum = request.body.CHECKSUMHASH;
	delete request.body.CHECKSUMHASH;

	const isVerifySignature = paytmchecksum.verifySignature(
		request.body,
		"bKMfNxPPf_QdZppa",
		paytmCheckSum
	);
	if (isVerifySignature) {
		let paytmParams = {};
		paytmParams["MID"] = request.body.MID;
		paytmParams["ORDERID"] = request.body.ORDERID;

		paytmchecksum
			.generateSignature(paytmParams, "bKMfNxPPf_QdZppa")
			.then(function (checksum) {
				paytmParams["CHECKSUMHASH"] = checksum;

				const post_data = JSON.stringify(paytmParams);

				const options = {
					hostname: "securegw-stage.paytm.in",
					port: 443,
					path: "/order/status",
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Content-Length": post_data.length,
					},
				};

				let res = " ";
				const post_req = https.request(options, function (post_res) {
					post_res.on("data", function (chunk) {
						res += chunk;
					});

					post_res.on("end", function () {
						let result = JSON.parse(res);
						console.log(result);
						response.redirect(``);
					});
				});
				post_req.write(post_data);
				post_req.end();
			});
	} else {
		console.log("Checksum Mismatched");
	}
};
