import {
  addMostRatedProducts,
  addNewArrivalProducts,
  addProducts,
  addTrendingProducts,
} from "@/store/slices/productSlice";
import axios from "axios";
import store from "@/store/store";

export const getAllProducts = async (pageNumber) => {
  try {
    const res = await axios.post("/api/all-products", { pageNumber });
    if (res.data?.success) {
      store.dispatch(addProducts(res.data?.products));
    } else {
      console.log(res.data?.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getTrendingProducts = async () => {
  try {
    const res = await axios.get("/api/trending-products");
    if (res.data?.success) {
      store.dispatch(addTrendingProducts(res.data?.products));
    } else {
      console.log(res.data?.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getMostRatedProducts = async () => {
  try {
    const res = await axios.get("/api/most-reated-products");
    if (res?.data?.success) {
      store.dispatch(addMostRatedProducts(res.data?.products));
    } else {
      console.log(res.data?.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getNewArrivalProducts = async () => {
  try {
    const res = await axios.get("/api/new-arrivals");
    if (res?.data?.success) {
      store.dispatch(addNewArrivalProducts(res.data?.products));
    } else {
      console.log(res.data?.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};
