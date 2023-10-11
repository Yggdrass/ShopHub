import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Pages.modules.css";
import { CartContext } from "../App";

const url = "https://api.noroff.dev/api/v1/online-shop";

/*const ProductPage = () => {
  const [products, setProducts] = useState([]);
  return (
    <div className="productPage-wrapper">
      <h1>{products.title}</h1>
    </div>
  );
};

export default ProductPage;
*/

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  const { setCart } = useContext(CartContext);
  //console.log(params);

  useEffect(() => {
    fetch(`${url}/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, [params]);

  const addToCart = () => {
    const cartJson = localStorage.getItem("cart");
    console.log(cartJson);
    let cart = cartJson ? JSON.parse(cartJson) : [];

    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  //console.log(product);

  return (
    //Create a back Button
    <div className="page-wrapper">
      <div className="product_details">
        <img src={product.imageUrl} alt={product.title} />
        <div className="product_details_description">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div>
            <span>Price: {product.price}</span>
            <br />
            <span>Discounted Price: {product.discountedPrice}</span>
          </div>
          <button
            onClick={() => {
              //setCart((prevCart) => [...prevCart, product]);
              addToCart();
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
