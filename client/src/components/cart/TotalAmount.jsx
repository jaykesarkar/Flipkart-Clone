import React, { useCallback, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";

const Header = styled(Box)`
	padding: 15px 24px;
	background: #fff;
	border-bottom: 1px solid #f0f0f0;
`;

const PriceDetails = styled(Box)`
	color: #878787;
`;

const Container = styled(Box)`
	padding: 15px 24px;
	background: #fff;
	& > p {
		margin-bottom: 20px;
		font-size: 14px;
	}
`;

const Price = styled(Box)`
	float: right;
`;

const Total = styled(Box)`
	font-size: 18px;
	font-weight: 600;
	border-top: 1px dashed #e0e0e0;
	padding: 20px 0;
	border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
	font-size: 16px;
	color: green;
`;
const TotalAmount = ({ cartItems }) => {
	const [price, setPrice] = useState(0);
	const [discount, setDiscount] = useState(0);

	const totalAmount = useCallback(() => {
		let price = 0,
			discount = 0;
		cartItems.map((item) => {
			return (
				(price += item.price.mrp),
				(discount += item.price.mrp - item.price.cost)
			);
		});
		setPrice(price);
		setDiscount(discount);
	}, [cartItems]);

	useEffect(() => {
		totalAmount();
	}, [cartItems, totalAmount]);

	return (
		<Box>
			<Header>
				<PriceDetails>PRICE DETAILS</PriceDetails>
			</Header>
			<Container>
				<Typography>
					Price ({cartItems?.length} {cartItems?.length > 1 ? "items" : "item"})
					<Price component="span">₹{price}</Price>
				</Typography>
				<Typography>
					Discount
					<Price component="span">₹{discount}</Price>
				</Typography>
				<Typography>
					Delivery Charges
					<Price component="span">₹50</Price>
				</Typography>
				<Total>
					Total Amount
					<Price component="span">₹{price - discount + 50}</Price>
				</Total>
				<Discount style={{ marginTop: 20 }}>
					You will save ₹{discount - 40} on this order
				</Discount>
			</Container>
		</Box>
	);
};

export default TotalAmount;
