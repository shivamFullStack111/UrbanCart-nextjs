import { dbConnect } from "@/lib/dbConnect";
import Order from "@/models/order";
import User from "@/models/User";

export async function POST(req) {
  try {
    await dbConnect();
    const { order, user } = await req.json();

    const isUser = await User.findOne({ _id: user?._id });

    if (!isUser) {
      return new Response(
        JSON.stringify({ success: false, message: "user not found" })
      );
    }

    const newOrder = new Order(order);

    await newOrder.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "order created successfully",
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
