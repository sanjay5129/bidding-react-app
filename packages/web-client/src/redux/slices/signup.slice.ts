import { createSlice } from "@reduxjs/toolkit";
import { signupRequest } from "redux/thunks/signup.thunk";
import { ILoginSlice } from "utils/types";

const initialState: ILoginSlice = {
  isLoading: true,
  success: false
};

export const registerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(signupRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupRequest.rejected, (state) => {
      state.isLoading = false;
      state.success = false;

    });
    builder.addCase(signupRequest.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });

  },
});

export default registerSlice.reducer;
