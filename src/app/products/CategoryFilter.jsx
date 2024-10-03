import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const CategoryFilter = () => {
  const [selected, setselected] = useState(1);
  return (
    <>
      <div className=" flex gap-2 w-full p-1 ">
        {/* left option  */}
        <div className="flex">
          <div className="flex  h-full flex-col gap-1 items-center  ">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                onClick={() => setselected(i)}
                className={`w-[70px] cursor-pointer hover:scale-105 transition-all duration-150 h-[70px] ${
                  selected == i ? "bg-red-200" : "bg-white"
                }  `}
              ></div>
            ))}
          </div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: (selected - 1) * 70 + selected * 3.5 }}
            transition={{ duration: 0.2 }}
            className="bg-red-500 w-1 h-[70px] "
          ></motion.div>
        </div>

        {/* render  */}
        <div className="flex flex-wrap w-full flex-grow--0 flex-shrink-0 p-2 pt-0 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="h-[90px] w-[90px] bg-slate-500 flex-grow-0 flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
