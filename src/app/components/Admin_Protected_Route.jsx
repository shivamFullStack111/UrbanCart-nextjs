"use client";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import React from "react";
import { useSelector } from "react-redux";

const AdminProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter(); // Initialize useRouter

  // Check if the user is not an admin

  if (!user) {
    return <div>Loading...</div>;
  }

  if (!user?.isAdmin) {
    router.push("/login"); // Redirect to login or any other page
    return null; // Prevent rendering children if not an admin
  }

  return children; // Render the children if the user is an admin
};

export default AdminProtectedRoute;
