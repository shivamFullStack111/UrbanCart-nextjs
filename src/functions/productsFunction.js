import { addProducts } from "@/store/slices/productSlice";
import axios from "axios";
import store from "@/store/store";

export const getAllProducts = async (pageNumber) => {
  try {
    const res = await axios.post("/api/product/all-products", { pageNumber });
    store.dispatch(addProducts(res.data?.products));
  } catch (error) {
    console.log(error.message);
  }
};
