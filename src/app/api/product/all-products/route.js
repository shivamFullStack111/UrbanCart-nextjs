import { dbConnect } from "@/lib/dbConnect"; // Adjust the path as necessary
import Product from "@/models/Product";

export async function POST(req) {
  try {
    // Establish database connection
    await dbConnect();

    // Parse the request body
    const { pageNumber = 1 } = await req.json();

    const item = 8;
    const allProducts = await Product.find()
      .skip((pageNumber - 1) * item)
      .limit(item)
      .lean(); // Improves performance by returning plain JS objects

    return new Response(
      JSON.stringify({
        success: true,
        message: `Products found with limit ${item}`,
        products: allProducts,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Products API Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
