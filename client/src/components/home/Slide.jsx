import React, { Component } from "react";
import { Box, Typography, Button, Divider, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slide = () => {
	return (
		<Box>
			<Box>
				<Typography></Typography>
				<Button></Button>
				<Divider />
				<Carousel></Carousel>
			</Box>
		</Box>
	);
};

export default Slide;
