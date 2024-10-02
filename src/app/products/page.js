"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "./SideBar";
import { Quicksand } from "next/font/google";
import { useSearchParams } from "next/navigation"; // Use useSearchParams from next/navigation

const sand = Quicksand({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap",
});

const Products = () => {
  const searchParams = useSearchParams(); // Get search parameters
  const term = searchParams.get("q"); // Extract 'term' parameter
  const category = searchParams.get("q"); // Extract 'category' parameter

  console.log("Search Term: ", term); // Log search term
  console.log("Category: ", category); // Log category

  return (
    <div className={sand.className}>
      <Header />
      <div className={"flex "}>
        <SideBar />
        <div>rfhjn</div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
