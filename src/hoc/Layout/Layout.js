import React from "react";
import classes from "./Layout.module.css"

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Layout(props) {
	return (
		<>
      <Header />

			{props.children}

			<Footer />
		</>
	);
}
