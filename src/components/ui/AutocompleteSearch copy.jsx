import React, { useEffect, useState } from "react";
import "../api/Product.css";
import ProductCard from "./ProductCard.jsx";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import ProductDetails from "../../pages/ProductDetails";
import { Link } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

function FetchProducts() {
  const [products, setProducts] = useState([]);
  // State for holding our loading state
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

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
    console.log(data);
  }, []);

  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  console.log(products.id);
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
