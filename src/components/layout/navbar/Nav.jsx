import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/" className={styles.link}>
          Home
        </Link>

        <Link to="/Contact" className={styles.link}>
          Contact Us
        </Link>

        <Link to="/Checkout" className={styles.link}>
          Checkout
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

// Console.log's for this file:

//console.log(React);
//console.log(Link);
//console.log(Navbar);
