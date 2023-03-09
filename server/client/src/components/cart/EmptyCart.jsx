import { Typography, Box, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(Box)`
	width: 80%;
	height: 75vh;
	background: #fff;
	margin: 80px 140px;
	margin-top: 80px;
`;

const Container = styled(Box)`
	text-align: center;
	padding-top: 100px;
`;

const Image = styled("img")({
	width: "17%",
});

const HomeLink = styled(Link)`
	text-decoration: none;
	display: block;
	margin-top: 10px;
`;

const HomeButton = styled(Button)`
	width: 90px;
`;

const EmptyCart = () => {
	const imgurl =
		"https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

	return (
		<Component>
			<Container>
				<Image src={imgurl} />
				<Typography>Your cart is empty!</Typography>
				<Typography component="span">Add items to it now.</Typography>
				<HomeLink to="/">
					<HomeButton variant="contained">Home</HomeButton>
				</HomeLink>
			</Container>
		</Component>
	);
};

export default EmptyCart;
