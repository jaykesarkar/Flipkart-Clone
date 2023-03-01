import React from "react";
import { Box } from "@mui/material";
import { DataProvider } from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import Home from "./components/home/Home";
import DetailView from "./components/productPage/DetailView";

const App = () => {
	return (
		<DataProvider>
			<BrowserRouter>
				<Header />
				<Box style={{ marginTop: 56 }}></Box>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<DetailView />} />
				</Routes>
			</BrowserRouter>
		</DataProvider>
	);
};

export default App;
