"user client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";
import productReducer from "@/store/slices/productSlice";
import cartReducer from "@/store/slices/cartSlice";
import wishlistReducer from "@/store/slices/wishlistSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
