"use client";
import React, { Suspense } from "react";
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

const ProductsContent = () => {
  const searchParams = useSearchParams(); // Get search parameters
  const term = searchParams.get("q"); // Extract 'q' (search term) parameter
  const category = searchParams.get("category"); // Extract 'category' parameter

  console.log("Search Term: ", term); // Log search term
  console.log("Category: ", category); // Log category

  return (
    <div className=''>
      <p>Search Term: {term}</p>
      <p>Category: {category}</p>
    </div>
  );
};

const Products = () => {
  return (
    <div className={sand.className}>
      <Header />
      <div className={"800px:flex max-800px:pt-20  "}>
        <SideBar />
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
