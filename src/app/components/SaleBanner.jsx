import Image from "next/image";
import React from "react";

const SaleBanner = () => {
  return (
    <>
      <div className="relative h-16 500px:h-20 700px:h-24 1000px:h-28 w-full">
        <Image
          fill={true}
          src="https://images.bewakoof.com/uploads/grid/app/thin-banner-desktop-buy3-1727441580.gif"
          alt="sale image"
        ></Image>
      </div>
    </>
  );
};

export default SaleBanner;
