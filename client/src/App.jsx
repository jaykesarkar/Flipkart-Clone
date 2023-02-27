import React from "react";
import { Header } from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import { DataProvider } from "./context/Context";

const App = () => {
	return (
		<DataProvider>
			<Header />
			<Box style={{ marginTop: 56 }}></Box>
			<Home />
		</DataProvider>
	);
};

export default App;
