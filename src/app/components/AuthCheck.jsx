"use client";
import React from "react";
import { useDispatch } from "react-redux";

const AuthCheck = ({ children }) => {
  const dispatch = useDispatch();

  return <>{children}</>;
};

export default AuthCheck;
