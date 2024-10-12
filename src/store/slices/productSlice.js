const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    trendingProducts: [],
    mostRatedProducts: [],
    newArrivalProducts: [],
    isLoading: true,
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
    addTrendingProducts: (state, action) => {
      state.trendingProducts = [...state.trendingProducts, ...action.payload];
    },
    addMostRatedProducts: (state, action) => {
      state.mostRatedProducts = [...state.mostRatedProducts, ...action.payload];
    },
    addNewArrivalProducts: (state, action) => {
      state.newArrivalProducts = [
        ...state.newArrivalProducts,
        ...action.payload,
      ];
    },
    setisLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  removeProduct,
  addProducts,
  trendingProducts,
  addTrendingProducts,
  addMostRatedProducts,
  setisLoading,
  addNewArrivalProducts,
} = productSlice.actions;
export default productSlice.reducer;
