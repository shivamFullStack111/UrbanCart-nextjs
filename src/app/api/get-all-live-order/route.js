import { dbConnect } from "@/lib/dbConnect";
import Order from "@/models/order";

export async function POST(req) {
  try {
    await dbConnect();
    const { userEmail } = await req.json();

    const orders = await Order.find({
      userEmail,
      status: { $nin: ["delivered", "cancel"] },
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "all live order get",
        orders,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
