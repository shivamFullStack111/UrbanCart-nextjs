import Product from "@/models/Product";

export async function POST(req) {
  try {
    const { couponid } = await req.json();
    await Product.findOneAndDelete({ _id: couponid });

    return new Response(
      JSON.stringify({ success: true, message: "Product deleted successfully" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
