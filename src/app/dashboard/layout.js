import React from "react";
import AdminProtectedRoute from "../components/Admin_Protected_Route";

const componentName = ({ children }) => {
  return (
    <>
      <AdminProtectedRoute>{children}</AdminProtectedRoute>
    </>
  );
};

export default componentName;
