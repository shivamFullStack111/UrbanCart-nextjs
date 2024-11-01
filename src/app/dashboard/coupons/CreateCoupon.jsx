import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { RxCross1, RxCross2 } from "react-icons/rx";

const CreateCoupon = ({ setcreateCouponsOpen }) => {
  const [active, setactive] = useState(0);
  const [productsId, setproductsId] = useState([]);
  const [value, setvalue] = useState("");
  const [products, setproducts] = useState([]);

  const [totalProductIn_db, settotalProductIn_db] = useState(null);
  const [pageNumber, setpageNumber] = useState(1);
  const [data, setdata] = useState({});

  const getProducts = async () => {
    try {
      const res = await axios.post("/api/get-products-by-search", {
        value,
        pageNumber,
      });

      if (res?.data?.success) {
        setproducts(res?.data?.products);
        settotalProductIn_db(res?.data?.totalProducts);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (value?.length === 0) {
      setproducts([]);
      settotalProductIn_db(0);
      setpageNumber(1);
      return;
    }
    const time = setTimeout(() => {
      getProducts();
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, [value, pageNumber]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/create-coupon", {
        data: { ...data, productsId: productsId },
      });

      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setcreateCouponsOpen(false);
      } else {
        toast.error(res.data?.message);
      }

      console.log(res?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=" fixed top-0 left-0 w-full h-full z-50 bg-[#0005] flex justify-center items-center ">
      <Toaster />
      <div className="bg-white overflow-y-scroll max-h-[100vh] 800px:max-h-[90vh] relative rounded-lg p-2 800px:p-4 w-[95%] 600px:w-[580px]  ">
        <p className="text-xl 1000px:text-2xl font-semibold 800px:text-bold text-gray-600">
          Create Coupon
        </p>

        <RxCross1
          onClick={() => setcreateCouponsOpen(false)}
          className="absolute top-2 text-2xl hover:scale-110 hover:text-red-500 cursor-pointer right-2 "
        />
        {/* search product  */}
        <div
          className={`flex border-2  ${
            active === 1 ? "border-blue-500" : "border-gray-400"
          }  mt-2 items-center gap-2 bg-gray-200 rounded-md p-2`}
        >
          <BsSearch className="text-gray-600" size={25} />
          <input
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            onFocus={() => setactive(1)}
            onBlur={() => setactive(0)}
            type="text"
            className="w-full h-full bg-gray-200 outline-none"
            placeholder="Search product"
          ></input>
          <RxCross2
            onClick={() => setvalue("")}
            className="text-2xl cursor-pointer text-gray-600 hover:scale-110 "
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-3 text-lg items-center font-semibold">
            <p className="rounded-full px-2 text-white bg-yellow-400">
              {" "}
              {productsId?.length}
            </p>
            <p>Porducts selected</p>
          </div>
          {products?.map((item, i) => (
            <ProductCard
              key={i}
              item={item}
              productsId={productsId}
              setproductsId={setproductsId}
              totalProductIn_db={totalProductIn_db}
              setpageNumber={setpageNumber}
            />
          ))}

          <div className="flex justify-between ">
            {pageNumber < totalProductIn_db / 8 && (
              <div
                onClick={() => setpageNumber((p) => p + 1)}
                className="ml-auto cursor-pointer text-blue-500 font-semibold text-lg underline"
              >
                Next
              </div>
            )}

            {pageNumber > 1 && (
              <div
                onClick={() => setpageNumber((p) => p - 1)}
                className="mr-auto cursor-pointer text-red-500 font-semibold text-lg underline"
              >
                Prev
              </div>
            )}
          </div>
        </div>

        <div className="  ">
          <p className="font-semibold mt-4 text-gray-500">Title:</p>
          <input
            onChange={(e) => setdata((p) => ({ ...p, title: e.target.value }))}
            type="text"
            placeholder="Enter title"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />
          <p className="font-semibold mt-4 text-gray-500">Coupon Code:</p>
          <input
            onChange={(e) => setdata((p) => ({ ...p, code: e.target.value }))}
            type="text"
            placeholder="Enter coupon code"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />

          <p className="font-semibold mt-2 text-gray-500">Description:</p>
          <textarea
            onChange={(e) =>
              setdata((p) => ({ ...p, description: e.target.value }))
            }
            rows={4}
            // placeholder="Enter description"
            className=" rounded-md p-2 outline-none w-full bg-gray-100 border-2 focus:border-yellow-300 "
          ></textarea>

          <p className="font-semibold mt-2 text-gray-500">Discount percent:</p>
          <input
            onChange={(e) =>
              setdata((p) => ({ ...p, discount: e.target.value }))
            }
            type="number"
            placeholder="Enter discounnt percentage"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />
          <p className="font-semibold mt-2 text-gray-500">Minimum price:</p>
          <input
            onChange={(e) =>
              setdata((p) => ({ ...p, minValue: e.target.value }))
            }
            type="number"
            placeholder="Enter minimum price of product applicable"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />
          <p className="font-semibold mt-2 text-gray-500">Maximum price:</p>
          <input
            onChange={(e) =>
              setdata((p) => ({ ...p, maxValue: e.target.value }))
            }
            type="number"
            placeholder="Enter maximum price of product applicable"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />

          <p className="font-semibold mt-4 text-gray-500">Expire in:</p>
          <input
            onChange={(e) =>
              setdata((p) => ({ ...p, expireDate: e.target.value }))
            }
            type="datetime-local"
            placeholder="Select expire date time"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />

          <div
            onClick={handleSubmit}
            className="bg-yellow-400 gap-2 hover:bg-yellow-300 text-white rounded-md font-semibold text-xl flex justify-center items-center mt-4 py-2"
          >
            <CiDiscount1 size={25} /> Create
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoupon;

const ProductCard = ({ item, i, productsId, setproductsId }) => {
  const [isAdded, setisAdded] = useState(false);

  useEffect(() => {
    const isAdd = productsId.find((id) => id === item?._id);

    if (isAdd) {
      setisAdded(true);
    } else {
      setisAdded(false);
    }
  }, [item, productsId]);

  return (
    <div
      onClick={() => {
        const isExist = productsId?.find((id) => id === item?._id);
        if (!isExist) {
          setproductsId((p) => [...p, item?._id]);
          setisAdded(true);
        } else {
          const filterProduct = productsId.filter((p) => p !== item?._id);
          setproductsId(filterProduct);
        }
      }}
      key={i}
      className={`rounded-md  ${
        isAdded && "bg-yellow-200"
      } cursor-pointer p-1 overflow-hidden border flex gap-3`}
    >
      <div className="relative w-[60px]  h-[70px]">
        <Image src={item?.images[0]} fill={true} />
      </div>
      <div>
        <p className="text-[16px] font-semibold text-yellow-400">
          {item?.title}
        </p>
        <p className="font-semibold text-gray-400">${item?.price}</p>
        <p className="text-sm text-gray-400">
          {item?.description?.slice(0, 15)}
        </p>
      </div>
    </div>
  );
};
