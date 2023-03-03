import React from "react";
import { Button, Box, styled } from "@mui/material";
import { ShoppingCart, FlashOn } from "@mui/icons-material";

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
	return (
		<LeftContainer>
			<Box style={{ padding: "15px 20px", border: "1.5px solid #fafafa" }}>
				<Image src={product.detailUrl} alt="productImage" />
			</Box>

			<StyledButton
				variant="contained"
				style={{ marginRight: 20, background: "#ff9f00" }}
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
