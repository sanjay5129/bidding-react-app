import { createSlice } from "@reduxjs/toolkit";
import { IBidSliceState, ICreateItem } from "utils/types";
import { createBidItems, getBidItems, updateBidItems } from "redux/thunks/bid.thunks";

const initialState: IBidSliceState = {
  items: [],
  isLoading: true,
  success: false,
};

export const bidItemSlice = createSlice({
  name: "bidItems",
  initialState,
  reducers: {
    successState: (state) => {
      state.success = false;
    },
    updateItemsQuery: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBidItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBidItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(getBidItems.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateBidItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBidItems.fulfilled, (state) => {
      state.success = true;
      state.isLoading = false;
    });
    builder.addCase(updateBidItems.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createBidItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createBidItems.fulfilled, (state, action ) => {
      const result = [...state.items, action?.payload] as ICreateItem[];
      {
        state.isLoading = false;
        state.items = result;
      }
    });
    builder.addCase(createBidItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { updateItemsQuery, successState } =
  bidItemSlice.actions;
export default bidItemSlice.reducer;
