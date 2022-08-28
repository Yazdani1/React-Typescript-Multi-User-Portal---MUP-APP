import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate, useLocation } from "react-router-dom";

interface IProposSecureLayout {
  children: React.ReactNode;
}

const SecureLayout = ({ children }: IProposSecureLayout) => {
  let location = useLocation();

  const userContextInfo = useContext(UserContext);

  return userContextInfo?.user ? (
    <> {children}</>
  ) : (
    <Navigate to="/signin" replace state={{ from: location }} />
  );
};

export default SecureLayout;
