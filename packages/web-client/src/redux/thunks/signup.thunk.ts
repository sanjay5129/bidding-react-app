import { createAsyncThunk } from "@reduxjs/toolkit";
import {  postRequest } from "requests";
import { SUCESS_STATUS, USER_CREATED_SUCESS, urls } from "utils/constant";
import { ISignin } from "utils/types";
import { enqueueSnackbar } from "notistack";

export const signupRequest = createAsyncThunk(
  "post/login",
  async (values: ISignin, thunkAPI) => {
    try {
      await postRequest(urls.REGISTER_URL, values);
      enqueueSnackbar(USER_CREATED_SUCESS, { variant: SUCESS_STATUS });
      return values;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
    