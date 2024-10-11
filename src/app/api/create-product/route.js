import { JWT_SECRET } from "@/app/utils";
import Product from "@/models/Product";
import User from "@/models/User";
import jwt from "jsonwebtoken";
export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    const cookies = req.headers.get("cookie");
    const token = cookies
      .split("; ")
      .find((row) => row.startsWith("token_urbancart="))
      ?.split("=")[1];

    console.log(token);

    if (!token)
      return new Response(
        JSON.stringify({
          success: false,
          message: "token is required to create product",
        })
      );

    const { user } = jwt.verify(token, JWT_SECRET);

    console.log(user);

    if (!user)
      return new Response(
        JSON.stringify({ success: false, message: "token is invalid" })
      );

    const admin = await User.findOne({ email: user?.email });

    if (!admin)
      return new Response(
        JSON.stringify({ success: false, message: "token is expired" })
      );

    if (!admin?.isAdmin)
      return new Response(
        JSON.stringify({
          success: false,
          message: "only admin can create a product",
        })
      );

    const newProduct = new Product({
      ...data,
    });

    await newProduct.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "product created successfully",
        product: newProduct,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
