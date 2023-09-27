import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./Images.module.css";

function LogoImage() {
  return <img src={Logo} alt="Logo" className={styles.headerLogo} />;
}

export default LogoImage;

// Console.log's for this file:

//console.log(React);
//console.log(Logo);
//console.log(LogoImage);
