const { createSlice } = require("@reduxjs/toolkit");

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    totalDatas: null,
    // products_6 orders_6, user_6, coupons_6,
    past6data: null,
  },
  reducers: {
    setTotalDatas: (state, action) => {
      state.totalDatas = action.payload;
    },
    setPast6data: (state, action) => {
      state.past6data = action.payload;
    },
  },
});

export default adminSlice.reducer;
export const { setTotalDatas, setPast6data } = adminSlice.actions;
