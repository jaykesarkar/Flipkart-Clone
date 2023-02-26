import React from "react";
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
	background: #2874f0;
	height: 56px;
	box-shadow: none;
`;
const Component = styled(Box)`
	margin-left: 12%;
	line-height: 0;
	margin-top: 5px;
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

const CustomButtonWrapper = styled(Box)`
	margin: 0 5px 0 auto;
`;

export const Header = () => {
	const logoUrl =
		"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
	const subUrl =
		"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";
	return (
		<StyledHeader>
			<Toolbar style={{ minHeight: 55 }}>
				<Component>
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
