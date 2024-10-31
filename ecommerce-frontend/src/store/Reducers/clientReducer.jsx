import {
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
  SET_USER,
  SET_IS_LOGGED_IN,
  LOG_OUT,
  SET_ADDRESS,
  SET_CREDIT_CARD,
  SET_PREVIOUS_ORDERS,
} from "../Actions/clientActions";

const initialClient = {
  user: {},
  isLoggedIn: false,
  addressList: [],
  creditCards: [],
  previousOrders: [],
  roles: [],
  theme: "",
  language: "",
};

export const clientReducer = (state = initialClient, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: { ...action.payload },
      };
    case SET_ROLES:
      return {
        ...state,
        roles: [...action.payload],
      };
    case SET_ADDRESS:
      return {
        ...state,
        addressList: [...action.payload],
      };
    case SET_CREDIT_CARD:
      return {
        ...state,
        creditCards: [...action.payload],
      };
    case SET_PREVIOUS_ORDERS:
      return {
        ...state,
        previousOrders: [...action.payload],
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case LOG_OUT:
      return {
        ...initialClient,
      };
    default:
      return state;
  }
};
