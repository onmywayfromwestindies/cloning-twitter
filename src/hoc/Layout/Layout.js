import React from "react";
import classes from "./Layout.module.css"

import Header from "../../Components/Header/Header";

export default function Layout(props) {
	return (
		<>
      <Header />

			{props.children}
		</>
	);
}
