import Order from "@/models/order";

export async function POST(req) {
  try {
    const { pageNumber } = await req.json();

    const item = 8;

    const orders = await Order.find()
      .skip((pageNumber - 1) * item)
      .limit(item)
      .lean();

    return new Response(
      JSON.stringify({ success: true, message: "orders get", orders })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
