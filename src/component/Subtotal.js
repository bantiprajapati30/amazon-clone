/** @format */

import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal, getRemainPrice } from "../Reducer";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorSharpIcon from "@mui/icons-material/ErrorSharp";
const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal__wrapper">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <small className="devivery-font">
              {getRemainPrice(basket) ? (
                <>
                  <span>
                    <ErrorSharpIcon className="green" />
                    Add <small>₹</small>
                    <span className="price">
                      {getRemainPrice(basket)}.00
                    </span>{" "}
                    of eligible items to your order to qualify for FREE
                    Delivery.
                  </span>
                </>
              ) : (
                <>
                  <span className="color-green green">
                    <CheckCircleIcon className="green" />
                    Your order is eligible for FREE Delivery.
                  </span>
                  <span>Select this option at checkout.</span>
                </>
              )}

              <Link to="/checkout">Details</Link>
            </small>
            <p>
              Subtotal ({basket.length} item): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order conatain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="primary-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
