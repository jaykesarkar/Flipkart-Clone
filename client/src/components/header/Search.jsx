import React, { useState, useEffect } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as allProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

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

const ListWrapper = styled(List)`
	position: absolute;
	color: #000;
	background: #ffffff;
	margin-top: 36px;
`;

const Search = () => {
	const [text, setText] = useState();
	const [open, setOpen] = useState(true);

	const getText = (textValue) => {
		setText(textValue);
		setOpen(false);
	};

	const getProducts = useSelector((state) => state.getProducts);
	const { products } = getProducts;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(allProducts());
	}, [dispatch]);

	return (
		<SearchContainer>
			<InputSearchBase
				placeholder="Search for products, brand and more"
				onChange={(e) => getText(e.target.value)}
			/>
			<SearchIconWrapper>
				<SearchIcon></SearchIcon>
			</SearchIconWrapper>
			{text && (
				<ListWrapper hidden={open}>
					{products
						.filter((product) =>
							product.title.longTitle.toLowerCase().includes(text.toLowerCase())
						)
						.map((product) => (
							<ListItem>
								<Link
									to={`/product/${product.id}`}
									style={{ textDecoration: "none", color: "inherit" }}
									onClick={() => setOpen(true)}
								>
									{product.title.longTitle}
								</Link>
							</ListItem>
						))}
				</ListWrapper>
			)}
		</SearchContainer>
	);
};

export default Search;
