"use client";

import React, { useEffect } from "react";
import AdminProtectedRoute from "../components/Admin_Protected_Route";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setPast6data, setTotalDatas } from "@/store/slices/adminSlice";
import axios from "axios";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getAllTotalData = async () => {
    try {
      const res = await axios.get("/api/admin/total-data");

      dispatch(setTotalDatas(res?.data?.totalDatas));
      console.log(res.data.totalDatas);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getAllPast6MonthData = async () => {
    try {
      const res = await axios.get("/api/admin/6month-data");

      dispatch(setPast6data(res?.data?.past6data));
      console.log(res.data.totalDatas);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      getAllTotalData();
      getAllPast6MonthData();
    }
  }, [user]);

  return (
    <>
      <AdminProtectedRoute>{children}</AdminProtectedRoute>
      <Footer />
    </>
  );
};

export default Layout;
