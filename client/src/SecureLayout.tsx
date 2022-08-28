import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate, useLocation } from "react-router-dom";

interface IProposSecureLayout {
  children: React.ReactNode;
}

const SecureLayout = ({ children }: IProposSecureLayout) => {
  let location = useLocation();

  const [userstate, setState] = useContext(UserContext);

  return userstate?.user ? (
    <> {children}</>
  ) : (

    <Navigate to="/signin" replace state={{ from: location }} />
  );
};

export default SecureLayout;
