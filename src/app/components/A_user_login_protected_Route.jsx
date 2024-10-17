// "use client";
// import { useRouter } from "next/navigation"; // Import useRouter from next/router
// import React from "react";
// import { useSelector } from "react-redux";

// const A_user_login_protected_Route = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const router = useRouter(); // Initialize useRouter

//   if (!user) {
//     router.push("/login");
//     return null;
//   }

//   return children; // Render the children if the user
// };

// export default A_user_login_protected_Route;

"use client";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const A_user_login_protected_Route = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if user is not logged in
    }
  }, [user, router]);

  if (!user) {
    return null; // Prevent rendering children if not logged in
  }

  return children; // Render the children if the user is logged in
};

export default A_user_login_protected_Route;
