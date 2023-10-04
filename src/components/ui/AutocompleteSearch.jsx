import React, { useEffect, useState } from "react";
import "../api/Product.css";
import ProductCard from "./ProductCard.jsx";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import ProductDetails from "../../pages/ProductDetails";
import { Link } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

function FetchProducts() {
  const [products, setProducts] = React.useState([]);
  // State for holding our loading state
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setProducts((products) => [...products, response]);
    return;
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  console.log(products);
  return (
    <div>
      <Stack sx={{ width: 300, margin: "auto" }}>
        <Autocomplete
          id="products_list"
          getOptionLabel={(products) => `${products.title}`}
          options={products}
          sx={{ width: 300 }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          noOptionsText={"No avaliable products by that name"}
          renderOption={(props, products) => (
            <Box component="li" {...props} key={products.id}>
              {products.title}
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Search for products" />
          )}
        />
      </Stack>
      <div key={products.id}>
        <Link to={`products/${products.id}`} element={<ProductDetails />}>
          {products.map((products) => (
            <div className="card">
              <h2>{products.title}</h2>
              <img src={products.imageUrl} alt={products.title} />
              <p>{products.description}</p>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
}

export default FetchProducts;
