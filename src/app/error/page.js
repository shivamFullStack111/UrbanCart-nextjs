// pages/error.js

import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Something Went Wrong</h1>
      <p>We encountered an unexpected error. Please try again later.</p>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </div>
  );
};

export default ErrorPage;
