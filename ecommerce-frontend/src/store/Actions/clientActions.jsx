import axiosInstance from "../../utils/axiosInstance";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
export const LOG_OUT = "LOG_OUT";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_CREDIT_CARD = "SET_CREDIT_CARD";
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
export const fetchAddress = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance
      .get("/user/address", { headers: { Authorization: token } })
      .then((res) => {
        console.log(res.data);
        dispatch(setAddress(res.data));
      })
      .catch((err) => console.log(err));
  }
};

export const saveNewAddress = (address) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .post("/user/address", { headers: { Authorization: token } }, address)
    .then((res) => {
      // dispatch(setAddress(res.data));
      console.log(res.data);
      console.log("success");
    })
    .catch((err) => console.log(err));
};

export const updateAddress = (address) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .put("/user/address", { headers: { Authorization: token } }, address)
    .then((res) => {
      // dispatch(setAddress(res.data));
      console.log(res.data);
      console.log("success");
    })
    .catch((err) => console.log(err));
};

export const deleteAddress = (addressId) => (dispatch) => {
  const token = localStorage.getItem("token");
  axiosInstance
    .delete(`/user/address/:${addressId}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      // dispatch(setAddress(res.data));
      console.log(res.data);
      console.log("success");
    })
    .catch((err) => console.log(err));
};
export const logOut = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  return {
    type: LOG_OUT,
  };
};
