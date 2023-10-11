import React, { useEffect, useState } from "react";
import { Url } from "./url";
import Product from "../ui/ProductCard";

const url = Url;
console.log("URL: ", url);

export default function FetchApi() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  //console.log("const data: ", data);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData.message);
        //console.log("apiData Message: ", apiData.message);
      });
  });

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
          {products.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
