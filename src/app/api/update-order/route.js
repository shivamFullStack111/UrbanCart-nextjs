import Order from "@/models/order";

export async function POST(req) {
  try {
    const { order } = await req.json();

    await Order.findOneAndUpdate({ _id: order?._id }, order);
    return new Response(
      JSON.stringify({ success: true, message: "Order  updated successfully" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
