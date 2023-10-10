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
import { Link } from "react-router-dom";
import Article from "./Article/Article";
const listArticles = [
  {
    id: "251475",
    titre: "Les nouvelles de la journée",
    contenu:
      "e Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
  },
  {
    id: "251445",
    titre: "Les nouvelles de la journée d'hier",
    contenu:
      "e Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
  },
];

export default function Articles() {
  return (
    <>
      {listArticles.map(article => (
        <div>
          <Link to={`/articles/${article.id}`}>{article.titre}</Link>
        </div>
      ))}
    </>
  );
}
