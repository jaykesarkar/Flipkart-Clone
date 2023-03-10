import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { categoryData } from "../../data/categoryData";

const Component = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	margin: "55px 130px 0 130px !important",
	[theme.breakpoints.down("lg")]: {
		margin: "0px !important",
		overflow: "hidden",
	},
}));
const Container = styled(Box)`
	padding: 12px 8px;
	text-align: center;
`;

const Text = styled(Typography)`
	font-size: 14px;
	font-weight: 500;
	font-family: inherit;
`;

const Category = () => {
	return (
		<Box style={{ background: "#fff" }}>
			<Component>
				{categoryData.map(({ id, url, text }) => {
					return (
						<Container key={id}>
							<img src={url} alt="category" style={{ width: 64 }} />
							<Text>{text}</Text>
						</Container>
					);
				})}
			</Component>
		</Box>
	);
};

export default Category;
