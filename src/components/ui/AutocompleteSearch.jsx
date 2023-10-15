import React, { useEffect, useState } from "react";
import "./styles/Product.css";
import "./SearchBar.css";
import "./styles/Input.css";
import "../../pages/Pages.modules.css";
import { Product } from "./Product";
import { Url } from "../api/url";

const url = Url;

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

  //console.log("Products:", products);

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

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
          <div className="products_list_searchInput">
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
            {products
              .filter((item) => {
                return searchText.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase();
              })
              .map((item) => (
                <Product key={item.id} item={item} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FetchProducts;
