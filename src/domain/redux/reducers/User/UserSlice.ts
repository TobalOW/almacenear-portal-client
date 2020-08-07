import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const USER_SLICE = "user";

interface Shop {}

interface CurrentUserState {
  isAuthenticated: boolean;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  shops: Shop[];
}

let initialState: CurrentUserState = {
  isAuthenticated: false,
  email: "",
  firstName: "",
  lastName: "",
  avatarUrl: "",
  shops: [],
};

const userSlice = createSlice({
  name: USER_SLICE,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<CurrentUserState>) {
      const { email, firstName, lastName, avatarUrl } = action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.avatarUrl = avatarUrl;
    },
    setShops(state, action: PayloadAction<Array<Shop>>) {
      state.shops = action.payload;
    },
    authenticateUser(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

// Actions for the reducer
export const { setUser } = userSlice.actions;

// export as default the complete reducer
export default userSlice.reducer;
