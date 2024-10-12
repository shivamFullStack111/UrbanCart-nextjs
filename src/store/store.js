"user client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import productReducer from "@/store/slices/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export default store;
