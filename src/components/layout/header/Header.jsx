import React from "react";
import { LogoImage } from "../../images/index.mjs";
import { Nav } from "../navbar/index";
import "./Header.module.css";

function Header() {
  return (
    <header>
      <LogoImage />
      <Nav />
    </header>
  );
}

export default Header;

// Console.log's for this file:

//console.log(React);
//console.log(LogoImage);
//console.log(Navbar);
//console.log(Header);
