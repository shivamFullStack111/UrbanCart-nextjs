const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("cart_urbancart", JSON.stringify(state.cart));
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart_urbancart", JSON.stringify(state.cart));
    },
    setallCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart, setallCart } =
  cartSlice.actions;
