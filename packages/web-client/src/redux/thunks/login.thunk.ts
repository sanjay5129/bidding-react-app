import { createAsyncThunk } from "@reduxjs/toolkit";
import {  postRequest } from "requests";
import { LOGIN_SUCESS_MESSAGE, SUCESS_STATUS, urls } from "utils/constant";
import { MyFormData } from "utils/types";
import { enqueueSnackbar } from "notistack";

export const loginRequest = createAsyncThunk(
  "post/login",
  async (values: MyFormData, thunkAPI) => {
    try {
      const data = await postRequest(urls.LOGIN_URL, values);
      enqueueSnackbar(LOGIN_SUCESS_MESSAGE, { variant: SUCESS_STATUS });
      return data;
      
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
    