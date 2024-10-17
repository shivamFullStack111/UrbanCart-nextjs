import { dbConnect } from "@/lib/dbConnect";
import Coupon from "@/models/coupon";

export async function GET() {
  try {
    await dbConnect();
    const coupons = await Coupon.find();

    return new Response(
      JSON.stringify({ success: true, message: "all coupon get", coupons })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
