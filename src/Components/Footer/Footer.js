import React from "react";

import classes from "./Footer.module.css";

import moment from "moment";

const year = moment().format("YYYY");

export default function Footer() {
	return (
		<footer className={classes.Footer}>
			<div>
				{year} © Cloning Twitter by{" "}
				<a
					href="https://imcoding.io"
					target="_blank"
					rel="noreferrer">
					imcoding.io
				</a>
			</div>
		</footer>
	);
}
