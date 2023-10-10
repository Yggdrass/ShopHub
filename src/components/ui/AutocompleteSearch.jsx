import React, { useEffect, useState } from "react";
import { Autocomplete, Box, ListItem, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "../api/Product.css";
import "./SearchBar.css";

const url = "https://api.noroff.dev/api/v1/online-shop";
export const Product = ({ item }) => (
  <li className="card">
    <Link to={`product/${item.id}`}>
      <div>
        <h2>{item.title}</h2>
        <img src={item.imageUrl} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </Link>
  </li>
);

function FetchProducts() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url).then((res) =>
      res.json().then((json) => {
        setProducts(json);
        //console.log(json);
      })
    );
  }, []);

  console.log("Products:", products);

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const filteredProducts = products.filter((item) =>
    item.title.includes(searchText)
  );

  //console.log("JSON Stringify", JSON.stringify(filteredProducts));
  return (
    <div className="page-wrapper">
      <input
        id="products_list"
        type="text"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <div>
        <ul>
          {filteredProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchProducts;
