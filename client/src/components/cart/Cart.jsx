import React from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";
import EmptyCart from "./EmptyCart";
import { paytm } from "../../service/api";
import { post } from "../../utils/paytm";

const Component = styled(Grid)(({ theme }) => ({
	padding: "30px 135px",
	display: "flex",
	[theme.breakpoints.down("md")]: {
		padding: "15px 10px",
	},
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
	paddingRight: 15,
	[theme.breakpoints.down("md")]: {
		marginBottom: 15,
	},
}));

const MyCart = styled(Box)`
	padding: 15px 24px;
	background: #fff;
`;

const ButtonWrapper = styled(Box)`
	padding: 16px 22px;
	background: #fff;
	box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
	border-top: 1px solid #f0f0f0;
`;

const PLaceOrder = styled(Button)`
	width: 250px;
	height: 51px;
	display: flex;
	margin-left: auto;
	background: #fb641b;
	color: #fff;
	border-radius: 2px;
`;

const Cart = () => {
	const { cartItems } = useSelector((state) => state.cart);

	const buyNow = async () => {
		let response = await paytm({
			amount: 500,
			email: "jay@gmail.com",
		});
		var information = {
			action: "https://securegw-stage.paytm.in/order/process",
			params: response,
		};
		post(information);
	};
	return (
		<>
			{cartItems.length ? (
				<Component container>
					<LeftComponent item lg={9} md={9} sm={12} xs={12}>
						<MyCart>
							<Typography>My Cart ({cartItems?.length})</Typography>
						</MyCart>
						{cartItems.map((item) => {
							return <CartItem item={item} />;
						})}
						<ButtonWrapper>
							<PLaceOrder variant="contained" onClick={() => buyNow()}>
								Place Order
							</PLaceOrder>
						</ButtonWrapper>
					</LeftComponent>
					<Grid item lg={3} md={3} sm={12} xs={12}>
						<TotalAmount cartItems={cartItems} />
					</Grid>
				</Component>
			) : (
				<EmptyCart />
			)}
		</>
	);
};

export default Cart;
