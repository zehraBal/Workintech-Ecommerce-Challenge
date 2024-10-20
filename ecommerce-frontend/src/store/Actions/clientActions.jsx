export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
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
