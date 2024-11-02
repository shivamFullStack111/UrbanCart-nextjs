import ProcessSteps from "@/app/profile/create-product/ProcessStep";
import ProductDetails from "@/app/profile/create-product/ProductDetails";
import ProductOverview from "@/app/profile/create-product/ProductOverview";
import ProductSpecifications from "@/app/profile/create-product/ProductSpecifications";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateProductModal = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [pageNo, setpageNo] = useState(1);
  const [productDetails, setproductDetails] = useState({
    images: [""],
  });
  const [productSpecifications, setproductSpecifications] = useState({});

  useEffect(() => {
    console.log(productSpecifications?.sizes);
  }, [productSpecifications]);
  // Dummy array of orders

  const handleCreateProduct = async () => {
    try {
      console.log(productSpecifications, productDetails);
      const res = await axios.post("/api/create-product", {
        ...productDetails,
        ...productSpecifications,
      });

      console.log(res.data);
      alert(res.data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-[#0004] flex justify-center fixed z-50 top-0 left-0 w-full h-full items-center">
      <div className="w-[97%] 500px:w-[90%] mt-6 bg-white 600px:w-[550px] 800px:w-[450px] 1000px:w-[550px] rounded-lg h-full overflow-y-scroll shadow-lg ">
        <div className="m-2 rounded-t-lg flex p-1 900px:p-3 items-center">
          <p className="bg-gradient-to-tr from-red-300 to-violet-500 bg-clip-text text-transparent font-semibold text-xl  1000px:text-3xl">
            Create Product
          </p>
        </div>

        {/* process step */}
        <ProcessSteps pageNo={pageNo} />

        {/* 1 st  */}
        {pageNo == 1 && (
          <ProductDetails
            setpageNo={setpageNo}
            setproductDetails={setproductDetails}
            productDetails={productDetails}
          />
        )}
        {pageNo == 2 && (
          <ProductSpecifications
            setpageNo={setpageNo}
            setproductSpecifications={setproductSpecifications}
            productSpecifications={productSpecifications}
            productDetails={productDetails}
          />
        )}
        {pageNo == 3 && (
          <ProductOverview
            productDetails={productDetails}
            productSpecifications={productSpecifications}
            setpageNo={setpageNo}
            handleCreateProduct={handleCreateProduct}
          />
        )}
      </div>
    </div>
  );
};

export default CreateProductModal;
