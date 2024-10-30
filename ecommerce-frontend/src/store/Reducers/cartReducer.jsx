import {
  CLEAR_CART,
  REMOVE_CART_ITEM,
  SET_CART,
  SET_CART_SUBTOTAL,
  SET_INSTALLMENT,
  SET_PAYMENT,
  SET_SELECTED_ADDRESS,
  SET_SHIPPING_COST,
} from "../Actions/cartActions";

const initialCart = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  payment: {},
  address: {},
  installment: null,
  cartSubtotal: localStorage.getItem("cartSubtotal")
    ? parseFloat(localStorage.getItem("cartSubtotal"))
    : 0,
  shippingCost: localStorage.getItem("shippingCost")
    ? parseFloat(localStorage.getItem("shippingCost"))
    : 29.99,
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case REMOVE_CART_ITEM: {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
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
          checked: checked,
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
        payment: action.payload,
      };
    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_INSTALLMENT:
      return {
        ...state,
        installment: action.payload,
      };
    case SET_CART_SUBTOTAL:
      localStorage.setItem("cartSubtotal", action.payload);
      return {
        ...state,
        cartSubtotal: action.payload,
      };
    case SET_SHIPPING_COST:
      localStorage.setItem("shippingCost", action.payload);
      return {
        ...state,
        shippingCost: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        payment: {},
        address: {},
        installment: null,
        cartSubtotal: 0,
        shippingCost: 0,
      };
    default:
      return state;
  }
};
