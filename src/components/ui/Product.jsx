import { Link } from "react-router-dom";
import styled from "styled-components";
import "./styles/Product.css";

const StyledViewProductButton = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  border: 2px solid white;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 25px;
  background-color: green;
  color: white;
  cursor: pointer;
`;

export const Product = ({ item }) => (
  <li>
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
        <br />
        <div className="button_div">
          <StyledViewProductButton component={Link} to={`product/${item.id}`}>
            view product
          </StyledViewProductButton>
        </div>
      </div>
    </div>
  </li>
);
