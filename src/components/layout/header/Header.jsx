import React, { useState } from "react";
import { LogoImage } from "../../images/index.mjs";
import { Nav } from "../navbar/index";
import "./Header.module.css";
import CartPage from "../../../pages/CartPage";

function Header() {
  const [cart, setCart] = useState([]);

  return (
    <header>
      <LogoImage />
      <Nav size={cart.map.length} />
    </header>
  );
}

export default Header;

// Console.log's for this file:

//console.log(React);
//console.log(LogoImage);
//console.log(Navbar);
//console.log(Header);
