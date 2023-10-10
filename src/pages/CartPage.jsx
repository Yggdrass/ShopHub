import React, { useContext, useSta } from "react";
import { CartContext } from "../App";
import { Product } from "../components/ui/AutocompleteSearch";
import { Table } from "@mui/material";

const CartPage = () => {
  //const { cart } = useContext(CartContext);

  const cartJson = localStorage.getItem("cart");
  console.log("Cart Json", cartJson);
  let cart = cartJson ? JSON.parse(cartJson) : [];
  console.log("Cart", cart);

  const CartLayout = () => {
    return (
      <>
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart_item">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="cart_item_image"
              />
              <h2 key={item.id}>{item.title}</h2>

              <div className="cart_item_quantity">
                <button> - </button>
                <div>{item.quantity}</div>
                <button> + </button>
              </div>
              <div>
                <button>Remove item from cart</button>
              </div>
            </div>
          ))
        ) : (
          <div>Cart is empty.</div>
        )}
      </>
    );
  };

  return (
    <div className="page-wrapper">
      <h1>Cart Page</h1>
      <CartLayout />
    </div>
  );
};

export default CartPage;
