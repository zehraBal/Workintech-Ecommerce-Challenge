import {
  SET_BEST_SELLERS,
  SET_CATEGORIES,
  SET_FETCH_STATE,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_PRODUCT_BY_ID,
} from "../actions/productActions";

const initialProduct = {
  categories: [],
  product_list: [],
  product_by_id: {},
  best_sellers: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetch_state: "NOT_FETCHED",
};

export const productReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };
    case SET_PRODUCT_LIST:
      return {
        ...state,
        product_list: [...state.product_list, ...action.payload],
      };
    case SET_BEST_SELLERS:
      return {
        ...state,
        best_sellers: [...action.payload],
      };
    case SET_PRODUCT_BY_ID:
      return {
        ...state,
        product_by_id: { ...action.payload },
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        total: action.payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
