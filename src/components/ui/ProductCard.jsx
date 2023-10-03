import React, { useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
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

export default ProductCard;
