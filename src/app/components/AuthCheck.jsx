"use client";
import {
  getAllProducts,
  getMostRatedProducts,
  getTrendingProducts,
} from "@/functions/productsFunction";
import { setisLoading } from "@/store/slices/productSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AuthCheck = ({ children }) => {
  const { allProducts, trendingProducts, mostRatedProducts } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setisLoading(true));
    getAllProducts(1);
    getTrendingProducts();
    getMostRatedProducts();
    dispatch(setisLoading(false));
  }, []);

  useEffect(() => {
    console.log("all products", allProducts?.length);
  }, [allProducts]);
  useEffect(() => {
    console.log("trending products", trendingProducts?.length);
  }, [trendingProducts]);
  useEffect(() => {
    console.log("most rated products", mostRatedProducts?.length);
  }, [mostRatedProducts]);

  return <>{children}</>;
};

export default AuthCheck;
