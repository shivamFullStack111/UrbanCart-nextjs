"use client";
import { getAllProducts } from "@/functions/productsFunction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AuthCheck = ({ children }) => {
  const { allProducts } = useSelector((state) => state.product);

  useEffect(() => {
    getAllProducts(1);
  }, []);

  useEffect(() => {
    console.log(allProducts);
  }, [allProducts]);

  return <>{children}</>;
};

export default AuthCheck;
