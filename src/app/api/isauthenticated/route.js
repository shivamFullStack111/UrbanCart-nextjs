import jwt from "jsonwebtoken";
import User from "@/models/User"; // Assuming you have a User model
import { JWT_SECRET } from "@/app/utils"; // Replace with your JWT_SECRET

export async function GET(req) {
  try {
    // Access the 'authorization' header using the Fetch API method
    const authorization = req.headers.get("authorization");

    if (!authorization) {
      return new Response(
        JSON.stringify({ success: false, message: "token not found" }),
        { status: 401 }
      );
    }

    // Verify the JWT token
    const { user } = jwt.verify(authorization, JWT_SECRET);

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "token is expired" }),
        { status: 403 }
      );
    }

    // Find the user in the database
    const isExist = await User.findOne({ email: user.email });

    if (!isExist) {
      return new Response(
        JSON.stringify({ success: false, message: "user not found" }),
        { status: 404 }
      );
    }

    console.log("user:------------", isExist);

    // Return the success response
    return new Response(JSON.stringify({ success: true, user: isExist }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
