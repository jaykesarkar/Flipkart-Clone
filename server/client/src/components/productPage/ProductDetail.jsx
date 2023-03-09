import React from "react";
import {
	Box,
	Typography,
	Table,
	TableBody,
	TableRow,
	TableCell,
	styled,
} from "@mui/material";
import { LocalOffer } from "@mui/icons-material";

const Offers = styled(Box)`
	font-size: 14px;
	vertical-align: baseline;
	& > p {
		font-size: 14px;
		margin-top: 10px;
	}
`;

const ColumnText = styled(TableRow)`
	font-size: 14px;
	vertical-align: baseline;
	& > td {
		font-size: 14px;
		margin-top: 10px;
	}
`;

const Badge = styled(LocalOffer)`
	margin-right: 10px;
	color: #14be47;
	font-size: 15px;
`;

const TermsConditions = styled("span")`
	color: #2874f0;
	font-weight: 500;
	display: inline-block;
	margin-left: 5px;
	cursor: pointer;
`;

const ProductDetail = ({ product }) => {
	const superCoin =
		"https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
	const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
	return (
		<>
			<Typography>Available offers</Typography>
			<Offers>
				<Typography>
					<Badge />
					Bank OfferPay with UPI and Get ₹15 discount{" "}
					<TermsConditions>T&C</TermsConditions>
				</Typography>
				<Typography>
					<Badge />
					Bank Offer 5% Cashback on Flipkart Axis Bank Card{" "}
					<TermsConditions>T&C</TermsConditions>
				</Typography>
				<Typography>
					<Badge />
					Buy this Product and Get Extra ₹500 Off on Bikes & Scooters
					<TermsConditions>T&C</TermsConditions>
				</Typography>
				<Typography>
					<Badge />
					Partner Offer Buy this product and get upto ₹500 off
					<TermsConditions>Know More</TermsConditions>
				</Typography>

				<Table>
					<TableBody>
						<ColumnText>
							<TableCell style={{ color: "#878787" }}>Delivery</TableCell>
							<TableCell style={{ fontWeight: 600 }}>
								Delivery by {date.toDateString()} | ₹50
							</TableCell>
						</ColumnText>

						<ColumnText>
							<TableCell style={{ color: "#878787" }}>Warranty</TableCell>
							<TableCell>No Warranty</TableCell>
						</ColumnText>

						<ColumnText>
							<TableCell style={{ color: "#878787" }}>Seller</TableCell>
							<TableCell>
								<span style={{ color: "#2874f0" }}>SuperComNet</span>
								<Typography>GST invoice available</Typography>
								<Typography>View more sellers starting from ₹329</Typography>
							</TableCell>
						</ColumnText>

						<TableRow>
							<TableCell colSpan={2}>
								<img src={superCoin} alt="superCoin" style={{ width: 390 }} />
							</TableCell>
						</TableRow>

						<ColumnText>
							<TableCell style={{ color: "#878787" }}>Description</TableCell>
							<TableCell>
								{product.description
									? product.description
									: "Introducing Nova Professional Dryer with 1800 watts of powerful drying , so that you can get salon-like hair styling even at your home. This hair dryer features Advanced Ehd + Technology which ensures that only the right amount of heat is distributed on your hair and preventing any damage to your hair"}
							</TableCell>
						</ColumnText>
					</TableBody>
				</Table>
			</Offers>
		</>
	);
};

export default ProductDetail;
