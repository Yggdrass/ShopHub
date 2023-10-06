import React, { useContext } from "react";
import { CartContext } from "../App";
import { Product } from "../components/ui/AutocompleteSearch";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        <ul>
          {cart.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartPage;
