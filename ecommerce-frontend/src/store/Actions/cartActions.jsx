export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const removeCartItem = (productId) => ({
  type: REMOVE_CART_ITEM,
  payload: productId,
});
export const setCart = (item) => ({
  type: SET_CART,
  payload: item,
});
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
