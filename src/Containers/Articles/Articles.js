// import React, { useEffect } from "react";
// // import { redirect } from "react-router-dom";
// import { Router } from "react-router-dom";

//  function Articles(props) {
// 	console.log(props);

// 	useEffect(() => {
// 		props.history.push("/");
// 	}, []);

// 	return (
// 		<>
// 			<h1> Articles</h1>

// 			{/* <redirect to="/" /> */}
// 		</>
// 	);
//  }

// export default Router(Articles)

import React from "react";
import Article from "./Article/Article";

export default function Articles(props) {
	props === true
		? console.log(props)
		: console.log("No props here in Articles !");

	if (props === true) {
		return (
			<>
				<h1>Articles</h1>

				<Article />
			</>
		);
	} else {
		return <h1>Articles sans props</h1>
	}
}
