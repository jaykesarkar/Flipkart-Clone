import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { categoryData } from "../../data/categoryData";

const Component = styled(Box)`
	display: flex;
	justify-content: space-between;
	margin: 56px 65px 0 65px;
`;
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
	);
};

export default Category;
