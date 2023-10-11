import React, { useEffect, useState } from "react";
import { Autocomplete, Box, ListItem, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "../api/Product.css";
import "./SearchBar.css";
import "./styles/Input.css";
import "../../pages/Pages.modules.css";
import { Url } from "../api/url";
import styled from "styled-components";

const StyledProductCard = styled(Link)`
  text-decoration: none;
`;

const url = Url;
export const Product = ({ item }) => (
  <li>
    <StyledProductCard to={`product/${item.id}`}>
      <div className="card">
        <img src={item.imageUrl} alt={item.title} />
        <div className="product_description">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <div>
            <span>Price: {item.price}</span>
            <br />
            <span className="discounted_price">
              Discounted Price: {item.discountedPrice}
            </span>
          </div>
        </div>
      </div>
    </StyledProductCard>
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
      <div className="filtered_products">
        <div className="searchInput_label">
          <div>
            <label
              htmlFor="products_list_searchInput"
              className="products_list_label"
            >
              Search for products
            </label>
          </div>
          <div>
            <input
              name="products_list_searchInput"
              id="products_list_searchInput"
              type="text"
              placeholder="Type here..."
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
          </div>
        </div>
        <br />
        <div>
          <ul>
            {filteredProducts.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FetchProducts;
