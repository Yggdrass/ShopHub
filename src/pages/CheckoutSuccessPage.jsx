import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const navigate = useNavigate();
  const BackToStore = () => {
    navigate(`/`);
  };
  return (
    <>
      <div className="page-wrapper">
        <h1>Your order was submitted successfully</h1>
        <p>
          Thank you for shopping from us, your items are being delivered as soon
          as possible. We hope your shopping experience was great, if not let us
          know why so we can improve our online store so it will be better in
          the future.
        </p>
        <p>Kind regards from us at ShopHub</p>
      </div>
      <div>
        <div>
          <h2>
            Was there something you forgot to purchase... or perhaps something
            else that caught your eye?
          </h2>
          <h2>
            Click on the button below, it will take ou back to the store page.
          </h2>
        </div>
      </div>
      <div className="button_div_checkout">
        <button
          className="checkOutButton"
          onClick={() => {
            //setCart((prevCart) => [...prevCart, product]);
            BackToStore();
          }}
        >
          Back to the shop
        </button>
      </div>
    </>
  );
};

export default CheckoutSuccessPage;
