import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "requests";
import { urls } from "utils/constant";

export const getUser = createAsyncThunk(
  "get/user",
  async (_, thunkAPI) => {
    try {
      const result = await getRequest(urls.GET_USERDETAILS);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

  