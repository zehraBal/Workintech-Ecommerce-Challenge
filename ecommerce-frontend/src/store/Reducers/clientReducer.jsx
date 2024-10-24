import {
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
  SET_USER,
  SET_IS_LOGGED_IN,
  LOG_OUT,
} from "../Actions/clientActions";

const initialClient = {
  user: {},
  isLoggedIn: false,
  addressList: [],
  creditCards: [],
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
