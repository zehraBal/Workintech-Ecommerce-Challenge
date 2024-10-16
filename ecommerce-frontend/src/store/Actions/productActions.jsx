import axiosInstance from "../../utils/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
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
// Action'ları import ediyoruz

export const fetchProducts = (limit, offset) => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING")); // Fetch durumu başlatıldı

    try {
      const response = await axiosInstance // Axios isteğini buradan döndür
        .get(`/products?limit=${limit}&offset=${offset}`);
      const data = response.data;
      console.log(data.products);
      console.log(data.total);
      dispatch(setProductList(data.products)); // Ürünleri kaydet
      dispatch(setTotal(data.total)); // Toplam sayıyı kaydet
      dispatch(setFetchState("FETCHED")); // Başarılı duruma geç*/
    } catch (error) {
      dispatch(setFetchState("ERROR")); // Hata durumuna geç
      console.error("Error fetching products: ", error);
    }
  };
};
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING")); // Fetch durumu başlatıldı

    try {
      const response = await axiosInstance // Axios isteğini buradan döndür
        .get("/categories");
      const data = response.data;
      dispatch(setCategories(data)); // Ürünleri kaydet
      dispatch(setFetchState("FETCHED")); // Başarılı duruma geç*/
    } catch (error) {
      dispatch(setFetchState("ERROR")); // Hata durumuna geç
      console.error("Error fetching products: ", error);
    }
  };
};
