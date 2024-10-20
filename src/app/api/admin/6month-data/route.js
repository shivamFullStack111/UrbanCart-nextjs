import Coupon from "@/models/coupon";
import Order from "@/models/order";
import Product from "@/models/Product";
import User from "@/models/User";
import { userByReq } from "../userByReq";

export async function GET(req) {
  try {
    const user = await userByReq(req);

    if (!user) {
      return new Responsea(
        JSON.stringify({ success: false, message: "user not found" })
      );
    }

    if (!user?.isAdmin) {
      return new Responsea(
        JSON.stringify({
          success: false,
          message: "only admin will access this route",
        })
      );
    }

    const month6 = new Date();
    month6.setMonth(month6.getMonth() - 6);

    const products_6 = await Product.find({ createdAt: { $gte: month6 } });
    const orders_6 = await Order.find({ createdAt: { $gte: month6 } });
    const user_6 = await User.find({ createdAt: { $gte: month6 } });
    const coupons_6 = await Coupon.find({ createdAt: { $gte: month6 } });

    return new Response(
      JSON.stringify({
        success: true,
        message: "past 6 month data",
        past6data: {
          products_6,
          orders_6,
          user_6,
          coupons_6,
        },
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
