import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Box,
	Typography,
	IconButton,
	Drawer,
	List,
	styled,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
// components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
	background: #2874f0;
	height: 56px;
	box-shadow: none;
`;
const Component = styled(Link)`
	margin-left: 12%;
	line-height: 0;
	margin-top: 5px;
	color: #ffffff;
	text-decoration: none;
`;

const SubHeading = styled(Typography)`
	font-size: 11px;
	font-style: italic;
	margin-top: -1.5px;
	letter-spacing: initial;
`;

const PlusImage = styled("img")({
	width: "10px",
	height: "10px",
	marginLeft: "1px",
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
	margin: "0 5% 0 auto",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
	display: "none",
	[theme.breakpoints.down("sm")]: {
		display: "block",
	},
}));

export const Header = () => {
	const logoUrl =
		"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
	const subUrl =
		"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const navbarList = () => {
		<Box style={{ width: 250 }} onClick={handleClose}>
			<List>
				<listItem>
					<CustomButtons />
				</listItem>
			</List>
		</Box>;
	};
	return (
		<StyledHeader>
			<Toolbar style={{ minHeight: 55 }}>
				<MenuButton onClick={handleOpen} color="inherit">
					<Menu />
				</MenuButton>

				<Drawer open={open} onClose={handleClose}>
					{navbarList()}
				</Drawer>

				<Component to="/">
					<img src={logoUrl} alt="logo" style={{ width: 75 }} />
					<Box style={{ display: "flex" }}>
						<SubHeading>
							Explore<span>&nbsp;</span>
							<Box
								component="span"
								style={{ color: "#FFE500", fontWeight: "bold" }}
							>
								Plus
							</Box>
							<PlusImage src={subUrl} alt="subUrl" />
						</SubHeading>
					</Box>
				</Component>
				<Search />
				<CustomButtonWrapper>
					<CustomButtons />
				</CustomButtonWrapper>
			</Toolbar>
		</StyledHeader>
	);
};
