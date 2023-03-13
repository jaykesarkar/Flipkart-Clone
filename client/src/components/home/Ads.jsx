import React from "react";
import { Grid, styled } from "@mui/material";

const ImageURL = [
	"https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50",
	"https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
	"https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
];

const ImageURL2 = [
	"https://rukminim1.flixcart.com/fk-p-flap/480/480/image/7767f053f3abf622.jpg?q=50",
	"https://rukminim1.flixcart.com/fk-p-flap/480/480/image/90c3b822d824724b.jpg?q=50",
	"https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
];

const ImageURL3 = [
	"https://rukminim1.flixcart.com/fk-p-flap/480/480/image/ed554cd441e63636.jpg?q=50",
	"https://rukminim1.flixcart.com/fk-p-flap/480/480/image/abb4535ad1986932.jpg?q=50",
	"https://rukminim1.flixcart.com/fk-p-flap/480/480/image/bac844862fa44b82.jpg?q=50",
];

const Wrapper = styled(Grid)`
	display: flex;
	margin-top: 20px;
	justify-content: space-between;
`;

const Ads = () => {
	return (
		<Wrapper contained="true" item lg={12} md={12} sm={12} xs={12}>
			{ImageURL.map((ads, index) => {
				return (
					<Grid item lg={4} md={4} sm={12} xs={12} key={index}>
						<img src={ads} alt="ads" style={{ width: "100%" }} />
					</Grid>
				);
			})}
		</Wrapper>
	);
};

export const Ads2 = () => {
	return (
		<Wrapper contained="true" item lg={12} md={12} sm={12} xs={12}>
			{ImageURL2.map((ads, index) => {
				return (
					<Grid item lg={4} md={4} sm={12} xs={12} key={index}>
						<img src={ads} alt="ads" style={{ width: "100%" }} />
					</Grid>
				);
			})}
		</Wrapper>
	);
};

export const Ads3 = () => {
	return (
		<Wrapper contained="true" item lg={12} md={12} sm={12} xs={12}>
			{ImageURL3.map((ads, index) => {
				return (
					<Grid item lg={4} md={4} sm={12} xs={12} key={index}>
						<img src={ads} alt="ads" style={{ width: "100%" }} />
					</Grid>
				);
			})}
		</Wrapper>
	);
};

export default Ads;
