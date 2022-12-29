/** @format */

import React from "react";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

   const numberFormat = (value) =>
     new Intl.NumberFormat("en-IN", {
       style: "currency",
       currency: "INR",
     }).format(value);
  const addBasketHandler = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product__wrapper" key={id}>
      <div className="overview__container">
        <p>{title}</p>
        <p className="price">{numberFormat(price)}</p>
        <div className="rating-wrapper">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <div className="image__wrapper">
        <img src={image} alt="product" />
      </div>
      <button type="button" className="primary-btn" onClick={addBasketHandler}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
