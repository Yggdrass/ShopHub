import React from "react";
import { Product } from "./AutocompleteSearch";

let product = Product;

const cartCount = document.getElementByClass("cartCount");
console.log(cartCount);

const CartCount = () => {
  if (product.length === 0) {
    cartCount.style.display = "none";
  } else if (product.length !== 0) {
  }

  return <div></div>;
};

export default CartCount;
