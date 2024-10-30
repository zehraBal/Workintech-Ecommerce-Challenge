export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const SET_SELECTED_ADDRESS = "SET_SELECTED_ADDRESS";
export const SET_INSTALLMENT = "SET_INSTALLMENT";
export const SET_CART_SUBTOTAL = "SET_CART_SUBTOTAL";
export const SET_SHIPPING_COST = "SET_SHIPPING_COST";
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
export const setSelectedAddress = (address) => ({
  type: SET_SELECTED_ADDRESS,
  payload: address,
});
export const setInstallment = (installment) => ({
  type: SET_INSTALLMENT,
  payload: installment,
});
export const setCartSubtotal = (subtotal) => ({
  type: SET_CART_SUBTOTAL,
  payload: subtotal,
});

export const setShippingCost = (cost) => ({
  type: SET_SHIPPING_COST,
  payload: cost,
});
