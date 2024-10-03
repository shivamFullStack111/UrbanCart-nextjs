"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Image from "next/image";
import logo from "../images/companyLogo.png";

const CarOusal = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [slidesNo, setSlidesNo] = useState(5); // Default number of slides

  useEffect(() => {
    // Function to update window size
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });

      // Update number of slides based on window width
      if (width < 600) {
        setSlidesNo(2);
      } else if (width >= 600 && width < 800) {
        setSlidesNo(3);
      } else if (width >= 800 && width < 1100) {
        setSlidesNo(4);
      } else if (width >= 1100 && width < 2000) {
        setSlidesNo(5);
      } else if (width >= 2000) {
        setSlidesNo(6);
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mb-4 mt pt-8">
      <h2 className="text-2xl p-2 700px:text-3xl 800px:p-5 text-gray-600  font-bold">
        Trending
      </h2>
      <Swiper
        autoPlay={true}
        className="h-[280px] 500px:h-[350px] "
        slidesPerView={slidesNo} // Use the dynamic slidesNo
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={slidesNo > 3 ? 7 : 3}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <SwiperSlide key={i} className="border-[1px] ">
            <div className="relative h-[80%]">
              <Image
                src={
                  "https://images.meesho.com/images/products/390809139/nijaf_400.webp"
                }
                fill={true}
                alt="Slide 1"
              />
            </div>
            <div className="p-1 text-sm">
              <p className="font-semibold text-[15px]">S T-shirt Men</p>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <p>$30</p>
                  <p className="line-through text-gray-400">$67</p>
                </div>
                <p>Ratings (3.4)</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default CarOusal;