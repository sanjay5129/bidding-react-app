import axios from "axios";
import {
  ACCESS_TOK,
  BASE_FALLBACK_PATH,
  BASE_URL,
  ERROR_UNAUTHORIZED,
  HTTP_VERB_GET,
  HTTP_VERB_POST,
  HTTP_VERB_PUT,
  INVALID_CREDENTIALS,
} from "utils/constant";
import { getTokenAttached } from "utils/helpers";
import { TGenericType } from "utils/types";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.data.statusCode === ERROR_UNAUTHORIZED) {
      localStorage.removeItem(ACCESS_TOK);
      setTimeout(() => {
        window.location.pathname = BASE_FALLBACK_PATH;
        alert(INVALID_CREDENTIALS);
      }, 2500);
      return Promise.reject(err);
    } else {
      return;
    }
  }
);

const fetchData = async (url: string, method: string, data?: TGenericType) => {
  try {
    const result = await axiosInstance(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: getTokenAttached(),
      },
      data,
    });
    return result.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getRequest = (url: string) => fetchData(url, HTTP_VERB_GET);
export const putRequest = (url: string, data: TGenericType) => fetchData(url, HTTP_VERB_PUT, data);
export const postRequest = (url: string, data: TGenericType) => fetchData(url, HTTP_VERB_POST, data);
