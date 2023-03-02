import React from "react";
import { Button, Box, styled } from "@mui/material";
import { ShoppingCart, FlashOn } from "@mui/icons-material";

const LeftContainer = styled(Box)`
	min-width: 40px;
	padding: 40px 0 0 80px;
`;
const Image = styled("img")({
	width: "90%",
});
const StyledButton = styled(Button)`
	width: 47%;
	border-radius: 2px;
	height: 50px;
`;

const ProductImage = ({ product }) => {
	return (
		<LeftContainer>
			<Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
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
