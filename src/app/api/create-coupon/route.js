import { dbConnect } from "@/lib/dbConnect";
import Coupon from "@/models/coupon";

export async function POST(req) {
  try {
    await dbConnect();
    const { data } = await req.json();
    console.log(data);
    const newCoupon = new Coupon(data);

    await newCoupon.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "coupon create successfully",
        coupon: newCoupon,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
