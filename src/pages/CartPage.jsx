import React, { useContext, useSta, useState } from "react";
import { CartContext } from "../App";
import { Product } from "../components/ui/AutocompleteSearch";
import { Table } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Pages.modules.css";
import "../components/ui/styles/Product.css";

const CartPage = () => {
  //const { cart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const cartJson = localStorage.getItem("cart");
  //console.log("CartJson", cartJson);
  let cartList = cartJson ? JSON.parse(cartJson) : [];
  //console.log("CartList", cartList);

  let totalCartPrice = 0;

  cartList.forEach(
    (item) => (totalCartPrice += item.discountedPrice * item.quantity)
  );
  //console.log("totalCartPrice", totalCartPrice);

  const navigate = useNavigate();

  const handleCheckout = () => {
    localStorage.clear("cart");

    navigate(`/cart/checkoutSuccess`);
    window.location.reload(true);
  };

  const CartLayout = () => {
    const Increment = (id) => {
      // duplicate the array from the cart state
      const updatedCartList = [...cartList];
      //find the item using the passed id
      const cartItem = updatedCartList.find((item) => item.id === id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        product.quantity = 1;
        updatedCartList.push(product);
      }

      // Update the state and local storage
      setCart(updatedCartList);
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
      window.location.reload(true);
    };

    const Decrement = (id) => {
      // duplicate the array from the cart state
      const updatedCartList = [...cartList];
      //find the item using the passed id
      const cartItem = updatedCartList.find((item) => item.id === id);
      console.log("Cart Without the Product Deleted: ", cartItem.quantity);

      if (cartItem.quantity > 0) {
        cartItem.quantity--;
      }

      // Update the state and local storage
      setCart(updatedCartList);
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
      window.location.reload(true);
    };

    const RemoveItem = (id) => {
      // duplicate the array from the cart state
      const updatedCartList = [...cartList];
      //find the item using the passed id
      /*const cartItem = updatedCartList.find((item) => item.id === id);

      if (cartItem) {
        localStorage.removeItem("cart", JSON.stringify(updatedCartList));
      }

      // Update the state and local storage
      setCart(updatedCartList);
      window.location.reload(true);*/

      let temp = updatedCartList.filter((item) => item.id !== id);
      console.log("Cart Without the Product Deleted: ", temp);
      localStorage.setItem("cart", JSON.stringify(temp));
      window.location.reload(true);
    };

    return (
      <>
        {cart && cartList.length > 0 ? (
          cartList.map((item) => (
            <div className="cart_item">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="cart_item_image"
              />
              <h2 key={item.id}>{item.title}</h2>
              <span>Price {item.discountedPrice}</span>
              <div className="cart_item_quantity">
                <button
                  className="increment_decrement_button"
                  onClick={() => {
                    Decrement(item.id);
                  }}
                >
                  -
                </button>

                <p>{item.quantity}</p>
                <button
                  className="increment_decrement_button"
                  onClick={() => {
                    Increment(item.id);
                  }}
                >
                  +
                </button>
              </div>
              <div>
                <h4>Total:</h4>
                <h4>{item.discountedPrice * item.quantity}</h4>
              </div>
              <div
                className="remove_item"
                onClick={() => {
                  RemoveItem(item.id);
                }}
              >
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
      <br />
      <div className="total_cart_value">
        <h2>Total cart value:</h2>
        <h2>{totalCartPrice}</h2>
      </div>
      <div className="button_div_checkout">
        <button
          className="checkOutButton"
          onClick={() => {
            handleCheckout();
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
