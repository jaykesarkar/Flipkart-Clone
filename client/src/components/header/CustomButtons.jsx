import React from "react";
import { useState, useContext } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/Context";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
	margin: "0 3% 0 auto",
	display: "flex",
	"& > *": {
		marginRight: "40px !important",
		fontSize: 12,
		alignItems: "center",
	},
	[theme.breakpoints.down("sm")]: {
		display: "block",
	},
}));

const Container = styled(Box)(({ theme }) => ({
	display: "flex",
	[theme.breakpoints.down("sm")]: {
		display: "block",
	},
}));

const LoginButton = styled(Button)`
	color: #2874f0;
	background: #fff;
	text-transform: none;
	padding: 5px 40px;
	border-radius: 2px;
	box-shadow: none;
	font-weight: 600;
	height: 32px;
	:hover {
		background-color: #fff;
	}
`;

const CustomButtons = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { profile, setProfile } = useContext(DataContext);
	return (
		<Wrapper>
			{profile ? (
				<Profile profile={profile} setProfile={setProfile} />
			) : (
				<LoginButton
					variant="contained"
					style={{ textTransform: "none" }}
					onClick={() => setIsOpen(true)}
				>
					Login
				</LoginButton>
			)}
			<Typography style={{ marginTop: 3, width: 135 }}>
				Become a seller
			</Typography>
			<Typography style={{ marginTop: 3 }}>More</Typography>

			<Container>
				<ShoppingCartIcon />
				<Typography>Cart</Typography>
			</Container>
			<LoginDialog open={isOpen} setOpen={setIsOpen} setProfile={setProfile} />
		</Wrapper>
	);
};

export default CustomButtons;
