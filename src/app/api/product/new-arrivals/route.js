import Product from "@/models/Product";

export async function GET() {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).limit(8);

    return new Response(
      JSON.stringify({
        success: true,
        message: "8 new arrival product get",
        products,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
