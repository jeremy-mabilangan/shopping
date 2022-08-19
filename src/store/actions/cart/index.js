import * as types from "../../config/cart";

export const increment = (payload) => {
  return {
    type: types.INCREMENT_QUANTITY,
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: types.DECREMENT_QUANTITY,
    payload,
  };
};
