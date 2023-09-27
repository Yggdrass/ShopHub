import React from "react";
import { LogoImage } from "../../images/index.mjs";
import "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div>
        <LogoImage />
      </div>
      <div>
        <p>Social Media Icons</p>
      </div>
      <div>Copyright</div>
    </footer>
  );
}

export default Footer;

// Console.log's for this file:

//console.log(React);
//console.log(LogoImage);
//console.log(Navbar);
//console.log(Header);
