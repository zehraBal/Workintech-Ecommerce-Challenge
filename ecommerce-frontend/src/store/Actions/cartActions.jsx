import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";

export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const SET_SELECTED_ADDRESS = "SET_SELECTED_ADDRESS";
export const SET_INSTALLMENT = "SET_INSTALLMENT";
export const SET_CART_SUBTOTAL = "SET_CART_SUBTOTAL";
export const SET_SHIPPING_COST = "SET_SHIPPING_COST";
export const CLEAR_CART = "CLEAR_CART";
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

export const createOrder = (orderData) => (dispatch) => {
  const token = localStorage.getItem("token");

  axiosInstance
    .post("/order", { headers: { Authorization: token } }, orderData)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: CLEAR_CART });
        localStorage.removeItem("cart");

        toast.success(
          "Congratulations! Your order has been successfully placed."
        );

        window.location.href = "/";
      }
    })
    .catch((err) => {
      console.error("Order creation failed:", err);
      toast.error("Failed to create order. Please try again.");
      window.location.href = "/order";
    });
};
