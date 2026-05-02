import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { refreshUser } from "./redux/thunk/authThunk";

import { RegisterForm } from "./components/contactForm/RegisterForm";
import { LoginForm } from "./components/contactForm/LoginForm";

import {Contacts} from "./components/Contacts/Contacts"; 

import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <b style={{ color: "#a855f7", textAlign: "center", display: "block", padding: "20px" }}>
        Обновление данных...
      </b>
    );
  }

  return (
    <div className="app-container background-dark">
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterForm />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginForm />}
            />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;