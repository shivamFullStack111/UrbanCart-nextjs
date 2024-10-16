import Order from "@/models/order";

export async function POST(req) {
  try {
    const { orderid, reason } = await req.json();
    const order = await Order.findOne({ _id: orderid });

    if (!order) {
      return new Response(
        JSON.stringify({ success: false, message: "order not found!" })
      );
    }

    order.status = "cancel";
    order.reason = reason;
    await order.save();

    return new Response(
      JSON.stringify({ success: true, message: "Order Cancel" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
