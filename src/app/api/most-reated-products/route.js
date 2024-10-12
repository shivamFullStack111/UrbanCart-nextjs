import { dbConnect } from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find().sort({ totalRating: 1 }).limit(8);

    return new Response(
      JSON.stringify({
        success: true,
        message: "8 most rated product get",
        products,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
