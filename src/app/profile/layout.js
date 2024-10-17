"use client";
import React from "react";
import A_user_login_protected_Route from "../components/A_user_login_protected_Route";

const layout_profile = ({ children }) => {
  return (
    <>
      <A_user_login_protected_Route>{children}</A_user_login_protected_Route>
    </>
  );
};

export default layout_profile;
