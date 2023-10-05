import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "./Pages.modules.css";

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
    <div>
      <h1>Single Product</h1>
    </div>
  );
};

export default ProductDetails;
