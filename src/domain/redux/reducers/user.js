import { createSlice } from "@reduxjs/toolkit";

import { notify } from "../../../presentation/atoms/Toast";
import { axiosInstance } from "../../../utils";

// Slice
const slice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state) => {
      state.user = null;
    },
    isAuthenticated: (state) => !!state.user,
  },
});

// Actions
const { loginSuccess, logoutSuccess } = slice.actions;

const login = (credentials) => async (dispatch) => {
  try {
    await axiosInstance.post("/auth/signin", credentials);
    notify("success", "Inicio de sesión exitoso");
    dispatch(loginSuccess(credentials.username));
  } catch (e) {
    notify("warning", "Ha ocurrido un error");
  }
};

const signup = (credentials) => async () => {
  try {
    const response = await axiosInstance.post("/auth/signup", credentials);
    notify("success", "Registro exitoso");
    return response;
  } catch (_error) {
    notify("warning", "Ha ocurrido un error");
  }
};

const logout = () => async (dispatch) => {
  try {
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};

export { signup, login, logout };
export default slice.reducer;
