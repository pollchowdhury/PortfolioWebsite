import React from "react";
import Home from "../Home/Home";
import { Nav, NavLink, Bars, NavMenu } from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="/Home">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/AboutMe">About Me</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;
