import Product from "@/models/Product";

export async function POST(req) {
  try {
    const { productid } = await req.json();
    await Product.findOneAndDelete({ _id: productid });

    return new Response(
      JSON.stringify({ success: true, message: "Product deleted successfully" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
