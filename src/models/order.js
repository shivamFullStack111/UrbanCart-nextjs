import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: Object,
    orderid: String,
    totalMRP: Number,
    subTotal: Number,
    cart: Array,
    discount: Number,
    delivery: Number,
    address: Object,
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
