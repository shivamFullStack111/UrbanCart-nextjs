import { dbConnect } from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function POST(req) {
  try {
    await dbConnect();
    const { productid } = await req.json();

    console.log(productid);

    const product = await Product.findOne({ _id: productid });

    if (product) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "product get successfully",
          product,
        })
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: "product not found",
        })
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message,
      })
    );
  }
}
