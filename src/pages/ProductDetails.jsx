import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import SearchBar from "../components/ui/SearchBar";
import FetchProducts from "../components/api/FetchProducts";
import "./Pages.modules.css";
import FetchJson from "../components/api/FetchJson";

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

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    console.log(data);

    getData(`https://api.noroff.dev/api/v1/online-shop/`);
  }, [id]);

  console.log(data);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data.title);
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt={data.title} />
      <p>Description: {data.description}</p>
    </div>
  );
};

export default ProductPage;
