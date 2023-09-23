import React from "react";
import "./App.css";
// import { Routes, Route, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import Home from "../../Containers/Home/Home";
import Contact from "../../Components/Contact/Contact";
import Articles from "../Articles/Articles";
import Article from "../Articles/Article/Article";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/articles" element={<Articles />} />

          <Route exact path="/articles/:id" element={<Article />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
