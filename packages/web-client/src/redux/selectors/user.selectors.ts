import { IState } from "utils/types";

export const userSelector = (state: IState) => state.user?.user;