"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const AuthCheck = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkauth = async (token) => {
      try {
        const res = await axios.get("/api/isauthenticated", {
          headers: { Authorization: token },
        });
        console.log("auth --------------", res.data);

        if (res.data.success) {
          dispatch(setUser(res.data?.user));
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const token = localStorage.getItem("token_urbancart");
    if (!token) {
      console.log("token not found");
    }
    checkauth(token);
  }, []);
  return <>{children}</>;
};

export default AuthCheck;
