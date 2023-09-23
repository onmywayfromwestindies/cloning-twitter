import React from "react";
import classes from "./Navigation.module.css"

import NavigationItem from "./NavigationItem/NavigationItem";

export default function Navigation() {
  return (
    <ul className={classes.Navigation}>

    <NavigationItem exact to="/">Home</NavigationItem>
    <NavigationItem to="/articles">Articles</NavigationItem>
    <NavigationItem exact to="contact">Contact</NavigationItem>

    </ul>
    )
}