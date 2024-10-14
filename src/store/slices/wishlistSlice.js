const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addItemToWishlist: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    removeItemFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export default wishlistSlice.reducer;
export const { addItemToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;
