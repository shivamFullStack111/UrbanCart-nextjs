const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.allProducts = [...state.allProducts, ...action.payload];
    },
    removeProduct: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (p) => p._id !== action.payload
      );
    },
  },
});

export const { removeProduct, addProducts } = productSlice.actions;
export default productSlice.reducer;
