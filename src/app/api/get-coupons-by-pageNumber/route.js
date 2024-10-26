import Coupon from "@/models/coupon";

export async function POST(req) {
  try {
    const { pageNumber } = await req.json();

    const item = 8;

    const coupons = await Coupon.find()
      .skip((pageNumber - 1) * item)
      .limit(item)
      .lean();

    const totalCoupons = await Coupon.countDocuments();

    return new Response(
      JSON.stringify({
        success: true,
        message: "orders get",
        coupons,
        totalCoupons,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
