import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledViewProductButton = styled(Link)`
  text-decoration: none;
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 25px;
  background-color: green;
  color: white;
  margin-top: 3rem;
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
        <div>
          <StyledViewProductButton component={Link} to={`product/${item.id}`}>
            view product
          </StyledViewProductButton>
        </div>
      </div>
    </div>
  </li>
);
