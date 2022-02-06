/** @format */

import React from "react";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [{ Basket }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
   const numberFormat = (value) =>
     new Intl.NumberFormat("en-IN", {
       style: "currency",
       currency: "INR",
     }).format(value);
  return (
    <div ke={id} className="checkoutProduct__wrapper">
      <div className="image__wrapper">
        <img src={image} />
      </div>

      <div>
        <p>{title}</p>
        <p>
          <small>₹</small>
          <strong>{numberFormat(price)}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
        <button
          type="button"
          className="primary-btn"
          onClick={RemoveFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
