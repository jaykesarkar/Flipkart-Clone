import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
	background-color: #fff;
	width: 38%;
	border-radius: 2px;
	margin-left: 10px;
	display: flex;
`;
const InputSearchBase = styled(InputBase)`
	width: 100%;
	padding-left: 20px;
	font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
	padding: 5px;
	color: blue;
	display: flex;
`;

const Search = () => {
	return (
		<SearchContainer>
			<InputSearchBase placeholder="Search for products, brand and more" />
			<SearchIconWrapper>
				<SearchIcon></SearchIcon>
			</SearchIconWrapper>
		</SearchContainer>
	);
};

export default Search;
