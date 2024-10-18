import React from "react";
import AdminProtectedRoute from "../components/Admin_Protected_Route";
import Footer from "../components/Footer";

const componentName = ({ children }) => {
  return (
    <>
      {/* <AdminProtectedRoute> */}
      {children}
      {/* </AdminProtectedRoute> */}
      <Footer />
    </>
  );
};

export default componentName;
