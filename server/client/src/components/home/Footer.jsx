import React from "react";
import { styled } from "@mui/material";

const Image = styled("img")(({ theme }) => ({
	width: "100%",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const Footer = () => {
	return (
		<>
			<Image src="/Footer.png" alt="footer" />
		</>
	);
};

export default Footer;
