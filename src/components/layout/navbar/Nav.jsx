import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background-color: blue;
`;

const NavUl = styled.ul`
  cursor: pointer;
  background-color: red;
  color: black;
  margin: 0;
  padding: 0 0 0 3rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 3rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  background-color: green;
`;

function Navbar() {
  return (
    <Nav>
      <NavUl>
        <StyledLink to="/">Home</StyledLink>

        <StyledLink to="/Contact">
          <i class="fa-solid fa-envelope"></i>Contact Us
        </StyledLink>

        <StyledLink to="/Checkout">
          <i class="fa-solid fa-cart-shopping"></i>Checkout
        </StyledLink>
      </NavUl>
    </Nav>
  );
}

export default Navbar;

// Console.log's for this file:

//console.log(React);
//console.log(Link);
//console.log(Navbar);
