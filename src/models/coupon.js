import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
  title: String,
  description: String,
  discountPercent: Number,
  minValue: Number,
  maxValue: Number,
  productsId: Array,
  code: String,
  expireDate: Date,
});

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);

export default Coupon;
