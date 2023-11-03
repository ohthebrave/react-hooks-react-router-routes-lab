import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  padding: "10px",
  background: "gray"
}

function NavBar() {
  return <div>
    <NavLink to="/" exact style={styles} >Home</NavLink>
    <NavLink to="/movies" exact style={styles} >Movies</NavLink>
    <NavLink to="/directors" exact style={styles} >Directors</NavLink>
    <NavLink to="/actors" exact style={styles} >Actors</NavLink>
  </div>;
}

export default NavBar;
