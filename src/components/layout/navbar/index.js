import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>

        <Link to="/Contact">Contact Us</Link>

        <Link to="/Checkout">Checkout</Link>
      </ul>
    </nav>
  );
}

export default Navbar;

// Console.log's for this file:

//console.log(React);
//console.log(Link);
//console.log(Navbar);
