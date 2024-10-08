// import React from "react";
// import { useState } from "react";
// import { FaAngleRight, FaChevronRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// const AllFilters = () => {
//   const [active, setactive] = useState(1);
//   return (
//     <>
//       <div className="p-2 px-4 ">
//         {/* color  */}
//         <div className={"  bg-white rounded-md"}>
//           <div
//             className={`flex justify-between ${
//               active == 1 && "bg-blue-200"
//             } items-center   p-2 cursor-pointer`}
//             onClick={() => setactive(active === 1 ? 0 : 1)}
//           >
//             <p className="text-xl font-semibold">Color</p>
//             <FaChevronRight
//               className={`${
//                 active == 1 && "-rotate-90 "
//               } transition-all duration-200`}
//               size={26}
//               color={"black"}
//             />
//           </div>
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: active === 1 ? "auto" : 0 }}
//             transition={{ duration: 0.2 }}
//             className={` px-2 ${
//               active == 1 && "py-2"
//             }  overflow-hidden flex gap-2 flex-wrap`}
//           >
//             {["red", "blue", "green", "pink", "black", "white"].map((i) => (
//               <div
//                 key={i}
//                 style={{ backgroundColor: "white" }}
//                 className="h-14 w-14 mt-2 rounded-full border-2 p-1"
//               >
//                 <div
//                   key={i}
//                   style={{ backgroundColor: i }}
//                   className="h-full w-full rounded-full"
//                 ></div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* color  */}
//         <div className={" mt-4  bg-white rounded-md"}>
//           <div
//             className={`flex justify-between ${
//               active == 2 && "bg-blue-200"
//             } items-center   p-2 cursor-pointer`}
//             onClick={() => setactive(active === 2 ? 0 : 2)}
//           >
//             <p className="text-xl font-semibold">Rating</p>
//             <FaChevronRight
//               className={`${
//                 active == 2 && "-rotate-90 "
//               } transition-all duration-200`}
//               size={26}
//               color={"black"}
//             />
//           </div>
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: active === 2 ? "auto" : 0 }}
//             transition={{ duration: 0.2 }}
//             className={` px-2 ${
//               active == 2 && "py-2"
//             } bg-white overflow-hidden `}
//           >
//             <div
//               className={
//                 "hover:bg-slate-700 hover:text-white text-[17px] font-semibold px-3 py-2 rounded-xl bg-gray-100 mt-2"
//               }
//             >
//               1.0 and Above
//             </div>
//             <div
//               className={
//                 "hover:bg-slate-700 hover:text-white text-[17px] font-semibold px-3 py-2 rounded-xl bg-gray-100 mt-2"
//               }
//             >
//               2.0 and Above
//             </div>
//             <div
//               className={
//                 "hover:bg-slate-700 hover:text-white text-[17px] font-semibold px-3 py-2 rounded-xl bg-gray-100 mt-2"
//               }
//             >
//               3.0 and Above
//             </div>
//             <div
//               className={
//                 "hover:bg-slate-700 hover:text-white text-[17px] font-semibold px-3 py-2 rounded-xl bg-gray-100 mt-2"
//               }
//             >
//               4.0 and Above
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllFilters;
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const AllFilters = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="p-4">
      {/* Color Filter */}
      <div className="bg-gray-100 rounded-lg shadow-lg mb-4">
        <div
          className={`flex justify-between items-center p-4 cursor-pointer rounded-lg transition duration-200 ${
            active === 1 ? "bg-blue-300" : "hover:bg-blue-200"
          }`}
          onClick={() => setActive(active === 1 ? 0 : 1)}
        >
          <p className="text-lg font-bold text-gray-800">Color</p>
          <FaChevronRight
            className={`transition-transform duration-200 ${
              active === 1 ? "-rotate-90" : ""
            }`}
            size={24}
            color={"#555"}
          />
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: active === 1 ? "auto" : 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 overflow-hidden flex gap-2 flex-wrap"
        >
          {["red", "blue", "green", "pink", "black", "white"].map((color) => (
            <div
              key={color}
              className="h-12 w-12 mt-2 rounded-full border-2 border-gray-300 p-1 flex items-center justify-center"
              style={{ backgroundColor: "white" }}
            >
              <div
                style={{ backgroundColor: color }}
                className="h-full w-full rounded-full"
              ></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Rating Filter */}
      <div className="bg-gray-100 rounded-lg shadow-lg">
        <div
          className={`flex justify-between items-center p-4 cursor-pointer rounded-lg transition duration-200 ${
            active === 2 ? "bg-blue-300" : "hover:bg-blue-200"
          }`}
          onClick={() => setActive(active === 2 ? 0 : 2)}
        >
          <p className="text-lg font-bold text-gray-800">Rating</p>
          <FaChevronRight
            className={`transition-transform duration-200 ${
              active === 2 ? "-rotate-90" : ""
            }`}
            size={24}
            color={"#555"}
          />
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: active === 2 ? "auto" : 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 overflow-hidden"
        >
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="hover:bg-blue-600 hover:text-white text-md font-semibold px-3 py-2 rounded-lg bg-gray-200 mt-2 transition-colors duration-200"
            >
              {num}.0 and Above
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AllFilters;
