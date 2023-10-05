import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  return (
    <li>
      <Link to="/product/${item.id}" element={<ProductDetails />}>
        {products.map((product) => (
          <div className="card">
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.description}</p>
          </div>
        ))}
      </Link>
    </li>
  );
};

export default ProductCard;
