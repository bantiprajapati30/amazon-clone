/** @format */

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const getRemainPrice = (basket) => {
  let price = basket?.map((item) => item.price);
  let totalPrice = 0;
  for (let i = 0; i < price.length; i++) {
    totalPrice += price[i];
  }
  if (totalPrice < 499) {
    return 499 - totalPrice;
  } else {
    return false;
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //clone the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove the ${action.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};
export default reducer;
