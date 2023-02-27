import React from "react";
import Category from "./Category";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as allProducts } from "../../redux/actions/productActions";

const Component = styled(Box)`
	padding: 20px 10px;
	background: #f2f2f2;
	box-shadow: 0px 0px 1px 0px;
`;

const Home = () => {
	const { products } = useSelector((state) => state.getProducts);
	console.log(products);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(allProducts());
	}, [dispatch]);

	return (
		<>
			<Category />
			<Component>
				<Banner />
				<Slide products={products} />
			</Component>
		</>
	);
};

export default Home;
