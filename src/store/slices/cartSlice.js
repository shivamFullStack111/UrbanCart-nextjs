const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
