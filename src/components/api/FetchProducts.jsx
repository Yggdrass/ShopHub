import React, { useEffect, useState } from "react";
import "./Product.css";

const url = "https://api.noroff.dev/api/v1/online-shop";

function FetchProducts() {
  const [products, setProducts] = useState([]);
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  const ProductCard = () => {
    return (
      <div className="result-box">
        {products.map((product) => (
          <div className="card">
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    async function getData() {
      try {
        // Reset the error state in case there as an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setProducts(json);
        // Clear the loading state once we've successfully got our data
        setIsLoading(false);
      } catch (error) {
        // Clear the loading state if we get an error and then
        // set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return <ProductCard />;
}

export default FetchProducts;
