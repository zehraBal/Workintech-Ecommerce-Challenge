import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
export const LOG_OUT = "LOG_OUT";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_CREDIT_CARD = "SET_CREDIT_CARD";
export const SET_PREVIOUS_ORDERS = "SET_PREVIOUS_ORDERS";
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
export const setIsLoggedIn = (loginData) => ({
  type: SET_IS_LOGGED_IN,
  payload: loginData,
});

export const setAddress = (userAdress) => ({
  type: SET_ADDRESS,
  payload: userAdress,
});
export const setCreditCard = (creditCard) => ({
  type: SET_CREDIT_CARD,
  payload: creditCard,
});
export const setPreviousOrders = (orders) => ({
  type: SET_PREVIOUS_ORDERS,
  payload: orders,
});

export const fetchAddress = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance
      .get("/user/address", { headers: { Authorization: token } })
      .then((res) => {
        dispatch(setAddress(res.data));
      })
      .catch((err) => toast.error("Failed to fetch address"));
  }
};

export const saveNewAddress = (address) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .post("/user/address", { headers: { Authorization: token } }, address)
    .then((res) => {
      // dispatch(setAddress(res.data));
      //console.log(res.data);
      //  console.log("success");
      toast.success("Address saved successfully!");
    })
    .catch((err) => {
      //console.log(err);
      toast.error("An error occurred. Please try again!");
    });
};

export const updateAddress = (address) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .put("/user/address", { headers: { Authorization: token } }, address)
    .then((res) => {
      // dispatch(setAddress(res.data));
      // console.log(res.data);
      //console.log("success");
      toast.success("Address updated successfully!");
      return { success: true };
    })
    .catch((err) => {
      //console.log(err);
      toast.warning("An error occured while updating. Please try again!");
      return { success: false, err };
    });
};

export const deleteAddress = (addressId) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .delete(`/user/address/:${addressId}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      // dispatch(setAddress(res.data));
      // console.log(res.data);
      // console.log("success");
      toast.success("Address deleted successfully");
    })
    .catch((err) => toast.error("Failed to delete address"));
};

export const fetchCreditCards = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance
      .get("/user/card", { headers: { Authorization: token } })
      .then((res) => {
        // console.log(res.data);
        dispatch(setCreditCard(res.data));
      })
      .catch((err) =>
        toast.error("Failed to fetch credit cards ", err.message)
      );
  }
};
export const saveCreditCard = (cardInfo) => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance
      .post("/user/card", { headers: { Authorization: token } }, cardInfo)
      .then((res) => toast.success("Credit card saved successfully"))
      .catch((err) => toast.error("Failed to save credit card"));
  }
};
export const updateCreditCard = (cardInfo) => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance
      .put("/user/card", { headers: { Authorization: token } }, cardInfo)
      .then((res) => toast.success("Credit card updated successfully"))
      .catch((err) => toast.error("Failed to update credit card"));
  }
};

export const deleteCreditCard = (cardId) => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance
      .delete(`/user/card/:${cardId}`, { headers: { Authorization: token } })
      .then((res) => toast.success("Credit card deleted successfully"))
      .catch((err) => toast.error("Failed to delete credit card"));
  }
};

export const logOut = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  return {
    type: LOG_OUT,
  };
};

export const fetchPreviousOrders = () => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .get("/order", { headers: { Authorization: token } })
    .then((res) => {
      toast.success("Previous orders fetched successfully");

      dispatch(setPreviousOrders(res.data));
    })
    .catch((err) => {
      toast.error("Failed to fetch previous orders: " + err.message);
    });
};
