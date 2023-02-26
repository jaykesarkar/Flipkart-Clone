import React from "react";
import { Header } from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import { DataProvider } from "./context/Context";
import { Provider } from "react-redux";
import store from "./redux/store.js";
const App = () => {
	return (
		<Provider store={store}>
			<DataProvider>
				<Header />
				<Box style={{ marginTop: 56 }}>
					<Home />
				</Box>
			</DataProvider>
		</Provider>
	);
};

export default App;
