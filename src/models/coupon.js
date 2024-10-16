import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
  title: String,
  description: String,
  discountPercent: Number,
  minValue: Number,
  maxValue: Number,
  porductId: String,
});

const Coupon = mongoose.models.Coupon || mongoose.model("Order", couponSchema);

export default Coupon;
