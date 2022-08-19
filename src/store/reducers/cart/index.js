import * as config from '../../config/cart';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === config.INCREMENT_QUANTITY) {

    if (state.cart.length > 0) {
      let res = state.cart.filter(item => {
        return item.id === action.payload.id
      }).length > 0

      if (res) {
        state.cart.find(item => item.id === action.payload.id).quantity++

        return {
          ...state,
          cart: [...state.cart],
        };
      }
    }

    return {
      ...state,
      cart: [...state.cart, action.payload],
    };

  } else if (action.type === config.DECREMENT_QUANTITY) {

    let res = state.cart.filter(item => {
      return item.id === action.payload
    })
    
    if (res) {
      res = res[0].quantity > 1
      if (res) {
        state.cart.find(item => item.id === action.payload).quantity--
        return {
          ...state,
          cart: [...state.cart],
        };
      }
    }

    let arr = state.cart.filter(item => {
      return item.id !== action.payload
    })

    return {
      ...state,
      cart: [...arr],
    };
  }

  return state;
};

export default cartReducer;
