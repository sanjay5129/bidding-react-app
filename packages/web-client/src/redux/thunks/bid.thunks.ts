import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, postRequest, putRequest } from "requests";
import { urls } from "utils/constant";
import { TCreateItem, TUpdateItem } from "utils/types";

export const getBidItems = createAsyncThunk(
  "get/bidItems",
  async (_, thunkAPI) => {
    try {
      const result = await getRequest(urls.BIDITEMS_URL);
      return result || [];
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
  
export const updateBidItems = createAsyncThunk(
  "update/bidItem",
  async (obj: TUpdateItem, thunkAPI) => {
    try {
      const resultURL = `${urls.BIDITEMS_URL}/${obj.id}`;
      const data = { id: obj.item?.id, start_price: obj.data.start_price };
      const response = await putRequest(resultURL, data);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const createBidItems = createAsyncThunk(
  "post/bidItem",
  async (values: TCreateItem, thunkAPI) => {
    try {
      await postRequest(urls.CREATE_BIDITEMS_URL, values);
      return values;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

  