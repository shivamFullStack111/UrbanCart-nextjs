"use client";
import {
  getAllProducts,
  getMostRatedProducts,
  getTrendingProducts,
} from "@/functions/productsFunction";
import { setisLoading } from "@/store/slices/productSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setUser } from "@/store/slices/userSlice";
import { addItemToCart, setallCart } from "@/store/slices/cartSlice";
import {
  addItemToWishlist,
  setallWishlist,
} from "@/store/slices/wishlistSlice";

const AuthCheck = ({ children }) => {
  const { allProducts, trendingProducts, mostRatedProducts } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const token = Cookies.get("token_urbancart");

      if (!token) return;
      const res = await axios.get("/api/isauthenticated", {
        headers: { Authorization: token },
      });

      if (res?.data?.success) {
        dispatch(setUser(res?.data?.user));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const setCartAndWishListitems = () => {
    const cart = JSON.parse(localStorage.getItem("cart_urbancart")) || [];
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist_urbancart")) || [];

    dispatch(setallCart(cart));
    dispatch(setallWishlist(wishlist));
  };

  useEffect(() => {
    dispatch(setisLoading(true));
    getAllProducts(1);
    getTrendingProducts();
    getMostRatedProducts();
    dispatch(setisLoading(false));
    getUser();
    setCartAndWishListitems();
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
