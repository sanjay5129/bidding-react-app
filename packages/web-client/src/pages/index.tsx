import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LinearLoader from "components/loader/lineLoader";
import ProtectedRoute from "components/layouts/ProtectectedRouteWrapper";
const Dashboard = React.lazy(() => import("pages/dashboard"));
const Login = React.lazy(() => import("pages/login"));
const SignUp = React.lazy(() => import("pages/signUp"));
const CreateItem = React.lazy(() => import("pages/create-item"));
const Deposit = React.lazy(() => import("pages/deposit"));
const FallbackLoading = () => <LinearLoader />;

const LandingPage = () => {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <Login />
            </Suspense>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<FallbackLoading />}>
              <SignUp />
            </Suspense>
          }
        ></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/create-item"
          element={
            <ProtectedRoute>
              <Suspense fallback={<FallbackLoading />}>
                <CreateItem />
              </Suspense>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/deposit"
          element={
            <ProtectedRoute>
              <Suspense fallback={<FallbackLoading />}>
                <Deposit />
              </Suspense>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </Suspense>
  );
};

export default LandingPage;
