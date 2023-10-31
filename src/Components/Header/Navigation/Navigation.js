import React from "react";
import classes from "./Navigation.module.css";

import Logo from "../Logo/Logo";
import NavigationItem from "./NavigationItem/NavigationItem";

export default function Navigation() {
	return (
		<ul className={classes.Navigation}>
			<Logo exact to="/" />

			<div className={classes.Links}>
				<NavigationItem exact to="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.25"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-home">
						<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
						<polyline points="9 22 9 12 15 12 15 22" />
					</svg>
					Home
				</NavigationItem>
			</div>

			<NavigationItem to="/articles">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.25"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-newspaper">
					<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
					<path d="M18 14h-8" />
					<path d="M15 18h-5" />
					<path d="M10 6h8v4h-8V6Z" />
				</svg>
				Articles
			</NavigationItem>
			<NavigationItem exact to="/contact">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.25"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user-circle">
					<circle cx="12" cy="12" r="10" />
					<circle cx="12" cy="10" r="3" />
					<path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
				</svg>
				Contact
			</NavigationItem>
			<NavigationItem exact to="/admin">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.25"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-lock-keyhole">
					<circle cx="12" cy="16" r="1" />
					<rect
						x="3"
						y="10"
						width="18"
						height="12"
						rx="2"
					/>
					<path d="M7 10V7a5 5 0 0 1 10 0v3" />
				</svg>
				Se connecter
			</NavigationItem>
		</ul>
	);
}
