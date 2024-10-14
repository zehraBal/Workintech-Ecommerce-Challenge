import { SET_ADDRESS, SET_CART, SET_PAYMENT } from "../Actions/cartActions";

const initialCart = {
  cart: [],
  payment: {},
  address: {},
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: [...action.payload],
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: { ...action.payload },
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: { ...action.payload },
      };
  }
};
