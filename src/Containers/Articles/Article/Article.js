import React from "react";

export default function Article(props) {
	props === true
		? console.log(props)
		: console.log("No props here in Article !");

	if (props === true) {
		return (
			<>
				<h1>Ma page article ({props.match.params.id})</h1>
				{props.location.state &&
				props.location.state.fromHome ? (
					<p>Cliqué depuis accueil</p>
				) : null}
			</>
		);
	} else {
		return (
			<>
				<p>Composant Article sans props :-(</p>
			</>
		);
	}
}
