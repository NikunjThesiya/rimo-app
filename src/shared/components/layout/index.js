import React from "react";
import Navbar from "./Navbar";
import HeaderBanner from "./HeaderBanner";

const Layout = ({ children }) => {
	return (
		<>
			<HeaderBanner />
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
