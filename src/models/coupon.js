import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
  title: String,
  description: String,
  discountPercent: Number,
  minValue: Number,
  maxValue: Number,
  productsId: Array,
});

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);

export default Coupon;
