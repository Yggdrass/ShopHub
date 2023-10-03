import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../pages/ProductDetails";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  return (
    <Link to="/product/:id" element={<Product />}>
      {products.map((product) => (
        <div className="card">
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.description}</p>
        </div>
      ))}
    </Link>
  );
};

export default ProductCard;
