import {
  REMOVE_CART_ITEM,
  SET_ADDRESS,
  SET_CART,
  SET_PAYMENT,
} from "../Actions/cartActions";

const initialCart = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  payment: {},
  address: {},
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case REMOVE_CART_ITEM: {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      return { ...state, cart: updatedCart };
    }
    case SET_CART: {
      const { count, product, checked } = action.payload;

      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      let updatedCart;

      if (existingItemIndex !== -1) {
        // If item exists, update its count
        updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: count,
        };
      } else {
        // If item does not exist, add it to the cart
        updatedCart = [...state.cart, action.payload];
      }

      // Update localStorage with the new cart
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };
    }
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
    default:
      return state;
  }
};
