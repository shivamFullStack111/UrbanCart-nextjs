import Coupon from "@/models/coupon";

export async function POST(req) {
  try {
    const { couponid } = await req.json();

    await Coupon.findOneAndDelete({ _id: couponid });

    return new Response(
      JSON.stringify({ success: true, message: "coupon successfully deleted!" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
