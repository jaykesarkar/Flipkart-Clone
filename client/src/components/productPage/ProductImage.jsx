import React, { useState } from "react";
import { Button, Box, styled } from "@mui/material";
import { ShoppingCart, FlashOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const LeftContainer = styled(Box)(({ theme }) => ({
	minWidth: "40%",
	padding: "40px 0 0 80px",
	[theme.breakpoints.down("md")]: {
		padding: "20px 40px",
	},
}));

const Image = styled("img")({
	width: "95%",
});

const StyledButton = styled(Button)`
	width: 46%;
	border-radius: 2px;
	height: 50px;
	color: #fff;
`;

const ProductImage = ({ product }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = product;
	const [quantity, setQuantity] = useState(1);

	const addItemToCart = () => {
		dispatch(addToCart(id, quantity));
		navigate("/cart");
	};

	return (
		<LeftContainer>
			<Box style={{ padding: "15px 20px", border: "1.5px solid #fafafa" }}>
				<Image src={product.detailUrl} alt="productImage" />
			</Box>

			<StyledButton
				variant="contained"
				style={{ marginRight: 20, background: "#ff9f00" }}
				onClick={() => addItemToCart()}
			>
				<ShoppingCart /> Add to Cart
			</StyledButton>

			<StyledButton variant="contained" style={{ background: "#fb641b" }}>
				<FlashOn /> Buy Now
			</StyledButton>
		</LeftContainer>
	);
};

export default ProductImage;
