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
    <div className="mb-4  py-5">
      <h2 className="text-2xl p-2 700px:text-3xl 800px:p-5 text-gray-600  font-bold">
        Men Lower's
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
                  "data:image/jpeg;base64,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"
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
