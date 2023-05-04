import { IColumnData, IColumnParam } from "../types";

export const BASE_URL = "http://localhost:4000/";

export const urls = {
  BIDITEMS_URL: BASE_URL + "bidItems",
  CREATE_BIDITEMS_URL: BASE_URL + "bidItems/create",
  LOGIN_URL: BASE_URL + "auth/login",
  REGISTER_URL: BASE_URL + "users/create",
  GET_USERDETAILS: BASE_URL + "users/me",
};

export const possibleColumneTypes = {
  button: "button",
  date: "date",
  text: "text",
  number: "number",
  day: "day",
};

export const getColumnData = ({
  handleClickOpen,
}: IColumnParam): IColumnData[] => [
  { id: "name", label: "NAME", align: "left", type: possibleColumneTypes.text },
  {
    id: "start_price",
    label: "CURRENT PRICE",
    align: "center",
    type: possibleColumneTypes.number,
  },
  {
    id: "time_window",
    label: "DURATION",
    align: "center",
    type: possibleColumneTypes.day,
  },
  {
    id: "Bid",
    label: "BID",
    align: "center",
    type: possibleColumneTypes.button,
    buttonLabel: "Bid",
    onClick: handleClickOpen,
  },
];

export const initialValuesSignup = {
  email: "",
  password: "",
  confirmPassword: "",
};
export const initialValuesLogin = {
  username: "",
  password: "",
};
export const createBidItemsValues = {
  name: "",
  start_price: 0,
  time_window: 0,
};
export const depositValues = {
  amount: undefined,
};
export const initialValuesBidPrice = {
  start_price: undefined,
};

export const ACCESS_TOK = "token";

export const HTTP_VERB_GET = "GET";
export const HTTP_VERB_POST = "POST";
export const HTTP_VERB_PUT = "PUT";

export const BASE_FALLBACK_PATH = "/login";
export const ERROR_UNAUTHORIZED = 401;

export const LOGIN_SUCESS_MESSAGE = "Logged In Sucessfully";
export const LOGGEDOUT_SUCESS_MESSAGE = "Logged Out Sucessfully";
export const SUCESS_STATUS = "success";
export const ERROR_STATUS = "error";
export const USER_CREATED_SUCESS = "User created successfully";
export const INVALID_CREDENTIALS =
  "Invalid user credentials , Please login again";
