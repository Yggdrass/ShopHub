import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Pages.modules.css";
import "../components/ui/styles/Buttons.css";
import { CartContext } from "../App";

const url = "https://api.noroff.dev/api/v1/online-shop";

const ProductDetails = () => {
  let [totalPrice, setTotalPrice] = useState(
    localStorage.getItem("totalPrice") || 0
  );
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  const { setCart } = useContext(CartContext);
  const [newTotal, setNewTotal] = useState((a, b) => (a += b));
  console.log("New Total: ", newTotal);
  console.log(totalPrice);

  useEffect(() => {
    fetch(`${url}/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, [params]);

  const AddToCart = (id) => {
    const cartJson = localStorage.getItem("cart");
    const totalPriceJson = localStorage.getItem("totalPrice");
    //console.log("CartJson", cartJson);
    console.log("TotalPriceJson", totalPriceJson);

    let cart = cartJson ? JSON.parse(cartJson) : [];
    let newTotal = totalPriceJson ? JSON.parse(totalPriceJson) : [];
    console.log("New Total From Json", newTotal);

    //const priceItem = newTotal.find((item) => item.id === id);
    const cartItem = cart.find((item) => item.id === id);

    var cartItemPrice = product.discountedPrice;
    //setInitialTotalPrice(cartItemPrice);
    //console.log("CartItem Details: ", cartItem);
    console.log("CartItem Price Details: ", cartItemPrice);

    var totalCartPrice = totalPrice;
    console.log("TotalCartPrice", totalCartPrice);

    /*const initialTotalPriceItem = initialTotalPrice.find(
      (item) => item.id === product.id
    );*/
    //let setNewTotalPrice = (a, b) => (a += b);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    if (totalPrice === 0) {
      setTotalPrice(cartItemPrice);
      localStorage.setItem("totalPrice", cartItemPrice);
    } else if (totalPrice !== 0) {
      //const newTotalPrice = (totalCartPrice += cartItemPrice);
      //console.log("New Total Price", newTotalPrice);
      //setTotalPrice(newTotal);
      setNewTotal(totalPrice, cartItemPrice);
      localStorage.setItem("totalPrice", newTotal);
    }

    /*if (initialTotalPriceItem) {
      initialTotalPriceItem.price++;
    }

    localStorage.setItem("initialTotalPrice", JSON.stringify(cartItemPrice));*/
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload(true);
  };

  const ShowPrice = (id) => {
    if (product.discountedPrice === product.price) {
      return <div>{product.price}</div>;
    } else if (product.discountedPrice !== product.price) {
      return (
        <div>
          <h4>This item is on discount!</h4>
          <div>
            <h4>Now only for:</h4>
            <p>{product.discountedPrice}</p>
          </div>
          <div>
            <p>You save {product.price - product.discountedPrice}</p>
          </div>
        </div>
      );
    }
  };
  const Reviews = () => {
    let productReviews = product.reviews;
    console.log(productReviews);

    return (
      <div>
        {/* Render the fetched data */}
        {productReviews ? (
          (
            <ul>
              {productReviews.map((item) => (
                <li key={item.id}>
                  <div>
                    <div className="rating">
                      <h4>Rating:</h4>
                      <span>{item.rating}</span>
                    </div>
                    <div>
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <p>User: {item.username}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) || <div>There are no reviews</div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  //console.log(product);

  return (
    <div className="page-wrapper">
      <div className="product_details">
        <img src={product.imageUrl} alt={product.title} />
        <div className="product_details_description">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div>
            <ShowPrice />
          </div>
          <div className="button_div">
            <button
              className="AddToCartButton"
              onClick={() => {
                AddToCart(product.id);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div>
          <h4>Reviews:</h4>
          <p>{<Reviews /> || <div>No Reviews</div>}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
