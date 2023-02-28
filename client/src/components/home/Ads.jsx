import React from "react";
import { Grid, styled } from "@mui/material";

const ImageURL = [
	"https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50",
	"https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
	"https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
];

const Wrapper = styled(Grid)`
	display: flex;
	margin-top: 20px;
	justify-content: space-between;
`;

const Ads = () => {
	return (
		<Wrapper contained lg={12} md={12} sm={12} xs={12}>
			{ImageURL.map((ads) => {
				return (
					<Grid item lg={4} md={4} sm={12} xs={12}>
						<img src={ads} alt="ads" style={{ width: "100%" }} />
					</Grid>
				);
			})}
		</Wrapper>
	);
};

export default Ads;
