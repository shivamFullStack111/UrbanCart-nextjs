const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addItemToWishlist: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
      localStorage.setItem(
        "wishlist_urbancart",
        JSON.stringify(state.wishlist)
      );
    },
    removeItemFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem(
        "wishlist_urbancart",
        JSON.stringify(state.wishlist)
      );
    },

    setallWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export default wishlistSlice.reducer;
export const { addItemToWishlist, removeItemFromWishlist, setallWishlist } =
  wishlistSlice.actions;
