import React from "react";
import { useState } from "react";

const DataContext = React.createContext();
// two components - Provider, Consumer

const DataProvider = ({ children }) => {
	const [profile, setProfile] = useState("");

	return (
		<DataContext.Provider value={{ profile, setProfile }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };
