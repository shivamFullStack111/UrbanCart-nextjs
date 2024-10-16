import { dbConnect } from "@/lib/dbConnect";
import Order from "@/models/order";

export async function POST(req) {
  try {
    await dbConnect();
    const { user } = await req.json();

    const orders = await Order.find({ userEmail: user?.email });

    return new Response(
      JSON.stringify({ success: true, message: "all orders get", orders })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
