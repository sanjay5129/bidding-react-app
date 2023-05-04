import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../../../utils/helpers";
import { ACCESS_TOK, BASE_FALLBACK_PATH } from "utils/constant";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = getLocalStorage(ACCESS_TOK);
  return token ? children : <Navigate to={BASE_FALLBACK_PATH} />;
};
export default ProtectedRoute;
