/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout__container">
      <div className="checkout__ad">
        <img
          src="https://m.media-amazon.com/images/I/61nL24jpwzL._SX3000_.jpg"
          alt="ad"
        />
      </div>
      {basket?.length === 0 ? (
        <div className="empty__basket">
          <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" />
          <div>
            <h2>Your Amazon Basket is empty</h2>
            <small>
              <Link to={"/"}>Shop today’s deals</Link>
            </small>
            <div className="btn-container">
              <Link to="/login">
                <button className="primary-btn">Sign in to your account</button>
              </Link>
              <Link to="/login">
                <button className="secondary-btn">Sign up now</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="checkoutProduct__container">
          <h2 className="title__heading">Your Shopping Basket</h2>
          {basket &&
            basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                  title={item.title}
                />
              );
            })}
        </div>
      )}
      {basket?.length > 0 ? (
        <div className="subtotal__container">
          <Subtotal />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkout;
