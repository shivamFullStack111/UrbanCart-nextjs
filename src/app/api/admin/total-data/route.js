import { userByReq } from "../userByReq";
import Order from "@/models/order";
import User from "@/models/User";
import Product from "@/models/Product";
import Coupon from "@/models/coupon";
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

    const totalOrders = await Order.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalCoupons = await Coupon.countDocuments();

    return new Response(
      JSON.stringify({
        success: true,
        message: "total of all modals get",
        totalDatas: {
          totalCoupons,
          totalOrders,
          totalProducts,
          totalUsers,
        },
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message,
      })
    );
  }
}
