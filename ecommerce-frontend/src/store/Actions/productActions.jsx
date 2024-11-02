import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
export const SET_PRODUCT_BY_ID = "SET_PRODUCT_BY_ID";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const CLEAR_PRODUCT_LIST = "CLEAR_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_BEST_SELLERS = "SET_BEST_SELLERS";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});
export const clearProductList = () => ({
  type: CLEAR_PRODUCT_LIST,
});
export const setProductById = (product) => ({
  type: SET_PRODUCT_BY_ID,
  payload: product,
});
export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});
export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setBestSellers = (bestSellers) => ({
  type: SET_BEST_SELLERS,
  payload: bestSellers,
});

export const fetchProducts = (limit, offset) => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  return axiosInstance
    .get(`/products?limit=${limit}&offset=${offset}`)
    .then((response) => {
      const data = response.data;
      dispatch(setProductList(data.products));
      dispatch(setTotal(data.total));
      dispatch(setFetchState("FETCHED"));
      return data;
    })
    .catch((error) => {
      dispatch(setFetchState("ERROR"));
      toast.error("Failed to fetch products: " + error.message);
      throw error;
    });
};

export const fetchProductsWithFilters = (limit, offset, filters) => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING")); // Fetch durumu başlatıldı

    try {
      const { categoryId, search, sort } = filters;
      let url = `/products?limit=${limit}&offset=${offset}`;

      if (categoryId) {
        url += `&category=${categoryId}`;
      }

      if (search && search.trim() !== "") {
        url += `&filter=${search.trim()}`;
      }

      if (sort) {
        url += `&sort=${sort}`;
      }

      const response = await axiosInstance.get(url);
      const data = response.data;
      dispatch(setProductList(data.products)); // Ürünleri kaydet
      dispatch(setTotal(data.total)); // Toplam sayıyı kaydet
      dispatch(setFetchState("FETCHED")); // Başarılı duruma geç
    } catch (error) {
      dispatch(setFetchState("ERROR")); // Hata durumuna geç
      toast.error("Failed to fetch filtered products: " + error.message);
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
      const response = await axiosInstance.get("/categories");
      const data = response.data;
      dispatch(setCategories(data));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      dispatch(setFetchState("ERROR"));
      toast.error("Failed to fetch categories: " + error.message);
    }
  };
};

export const fetchTopProducts = (
  limit = 8,
  offset = 0,
  sort = "rating",
  order = "desc"
) => {
  return (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    axiosInstance
      .get(`/products?limit=${limit}&offset=${offset}&sort=${sort}:${order}`)
      .then((response) => {
        const data = response.data;
        //   console.log(data.products);
        //  console.log(data.total);
        dispatch(setBestSellers(data.products)); // Ürünleri kaydet
        dispatch(setFetchState("FETCHED")); // Başarılı duruma geç
      })
      .catch((error) => {
        dispatch(setFetchState("ERROR")); // Hata durumuna geç
        toast.error("Failed to fetch top products: " + error.message);
      });
  };
};
export const fetchProductById = (productId) => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));

  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    dispatch(setProductById(response.data));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("ERROR"));
    toast.error("Failed to fetch product details: " + error.message);
  }
};
