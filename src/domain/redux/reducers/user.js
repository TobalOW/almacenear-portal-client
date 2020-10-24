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

// Dispatchers
// const { loginSuccess, logoutSuccess } = slice.actions;

// Actions
export const login = async (credentials) => {
  try {
    const { data } = await axiosInstance.post("/auth/signin", credentials);
    // const { accessToken } = data;
    // dispatch(loginSuccess({ accessToken }));
    notify("success", "¡Bienvenido!");
    return data;
  } catch (e) {
    notify("warning", "Ha ocurrido un error");
  }
};

export const signup = async (credentials) => {
  try {
    await axiosInstance.post("/auth/signup", credentials);
    notify("success", "Registro exitoso");
    return true;
  } catch (_error) {
    notify("warning", "Ha ocurrido un error");
  }
};

export const logout = () => async (dispatch) => {
  try {
    // return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};

export default slice.reducer;
