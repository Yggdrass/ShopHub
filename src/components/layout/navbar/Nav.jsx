import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import { CartItemsCount } from "../../ui/CartItemsCount";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 3rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  background-color: green;
`;

function Navbar({ size }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/Contact">
            <i class="fa-solid fa-envelope"></i>Contact Us
          </StyledLink>

          <StyledLink to="/Cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>
              <CartItemsCount />
            </span>
          </StyledLink>
        </ul>
      </nav>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setNavbarOpen((prev) => !prev)}
        className="toggle"
        size="4x"
      >
        {navbarOpen ? "close" : "open"}
      </FontAwesomeIcon>
    </>
  );
}

export default Navbar;
