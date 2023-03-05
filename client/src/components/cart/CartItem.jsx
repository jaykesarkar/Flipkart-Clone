import React from "react";
import { Card, Box, Typography, Button, styled } from "@mui/material";
import { addEllipsis } from "../../utils/Ellipsis";
import GroupButton from "./GroupedButton";

const Component = styled(Card)`
	border-top: 1px solid #f0f0f0;
	border-radius: 0px;
	display: flex;
	background: #fff;
`;

const LeftComponent = styled(Box)`
	margin: 20px;
	display: flex;
	flex-direction: column;
`;

const SellerText = styled(Typography)`
	color: #878787;
	font-size: 14px;
	margin-top: 10px;
`;

const MRP = styled(Typography)`
	color: #878787;
`;

const Cost = styled(Typography)`
	font-size: 18px;
	font-weight: 600;
`;

const Discount = styled(Typography)`
	color: #388e3c;
`;

const Remove = styled(Button)`
	font-size: 16px;
	margin-top: 20px;
`;

const CartItem = ({ item }) => {
	const fassured =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
	return (
		<Component>
			<LeftComponent>
				<img
					src={item.url}
					alt="productImage"
					style={{ width: 110, height: 110 }}
				/>
				<GroupButton />
			</LeftComponent>

			<Box style={{ margin: 20 }}>
				<Typography>{addEllipsis(item.title.longTitle)}</Typography>
				<SellerText>
					Seller : WS Retailer
					<span>
						<img
							src={fassured}
							alt="fassured"
							style={{ width: 50, marginLeft: 10 }}
						/>
					</span>
				</SellerText>
				<Typography style={{ margin: "20px 0" }}>
					<Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
					<MRP component="span">
						<strike>₹{item.price.mrp}</strike>
					</MRP>
					&nbsp;&nbsp;&nbsp;
					<Discount component="span">{item.price.discount} off</Discount>
				</Typography>
				<Remove>Remove</Remove>
			</Box>
		</Component>
	);
};

export default CartItem;
