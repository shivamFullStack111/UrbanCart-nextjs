import Product from "@/models/Product";

export async function POST(req) {
  try {
    const { product } = await req.json();
    await Product.findOneAndUpdate({ _id: product._id }, product);

    return new Response(
      JSON.stringify({ success: true, message: "product updated successfully" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
