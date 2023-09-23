import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.modules.css";

export default function Home() {
	return (
		<>
			<h1>Bienvenue sur Cloning Twitter</h1>
			<Link to="/articles/1">Voir mon article</Link>
			<Link
				to={{
					pathname: "/article/1",
					state: { fromHome: true },
				}}>
				Lien vers 1 ancre
			</Link>
		</>
	);
}
