import { createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "redux/thunks/login.thunk";
import { ILoginSlice } from "utils/types";

const initialState: ILoginSlice = {
  isLoading: true,
  success: false
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginRequest.rejected, (state) => {
      state.isLoading = false;
      state.success = false;

    });
    builder.addCase(loginRequest.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });

  },
});

export default loginSlice.reducer;
