import { IState } from "utils/types";

export const bidItemsSelector = (state: IState) => state.bidItems?.items;
export const bidItemsSuccessSelector = (state: IState) => state.bidItems?.success;