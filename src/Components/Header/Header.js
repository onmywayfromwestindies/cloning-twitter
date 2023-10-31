import React from "react";
import classes from "./Header.module.css";

import Navigation from "../Header/Navigation/Navigation";

export default function Header() {
	return (
		<header className={classes.Header}>
			<div
				className={["container", classes.flex].join(
					" "
				)}></div>
			<div className={classes.logo}>
				<h1>Cloning Twitter</h1>
			</div>
			<nav>
				<Navigation />
			</nav>
		</header>
	);
}
