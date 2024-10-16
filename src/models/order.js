import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: Object,
    userEmail: String,
    orderid: String,
    totalMRP: Number,
    subTotal: Number,
    cart: Array,
    discount: Number,
    delivery: Number,
    address: Object,
    status: {
      type: String,
      default: "Processing",
    },
    reason: String,
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
