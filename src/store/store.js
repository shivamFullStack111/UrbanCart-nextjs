"user client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import productReducer from "@/store/slices/productSlice";
import cartReducer from "@/store/slices/cartSlice";
import wishlistReducer from "@/store/slices/wishlistSlice";

import adminReducer from "@/store/slices/adminSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    wishlist: wishlistReducer,
    admin: adminReducer,
  },
});

export default store;
