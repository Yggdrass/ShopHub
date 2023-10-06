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
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  const { setCart } = useContext(CartContext);
  console.log(params);

  useEffect(() => {
    fetch(`${url}/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  });

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(product);
  return (
    //Create a back Button
    <div className="page-wrapper">
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.description}</p>
      <button
        onClick={() => {
          setCart((prevCart) => [...prevCart, product]);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
