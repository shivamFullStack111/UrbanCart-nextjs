import Coupon from "@/models/coupon";

export async function POST(req) {
  try {
    const { coupon } = await req.json();

    await Coupon.findOneAndUpdate({ _id: coupon?._id }, coupon);
    return new Response(
      JSON.stringify({ success: true, message: "Coupon  updated successfully" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
