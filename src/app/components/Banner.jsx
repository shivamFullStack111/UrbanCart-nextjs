"use client";
import Image from "next/image";
import React from "react";
import banner from "../images/banner.png";

const Banner = () => {
  return (
    <>
      <div className="h-12 700px:h-32  1000px:h-52 relative">
        <Image className="" src={banner} alt="banner" fill={true}></Image>
      </div>
    </>
  );
};

export default Banner;
