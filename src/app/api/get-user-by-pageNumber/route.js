import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { PiPlugsConnectedBold } from "react-icons/pi";

export async function POST(req) {
  try {
    await dbConnect();
    const { pageNumber } = await req.json();

    const item = 8;

    const users = await User.find()
      .skip((pageNumber - 1) * item)
      .limit(item)
      .lean();

    const totalUsers = await User.countDocuments();

    return new Response(
      JSON.stringify({ success: true, message: "users get", users, totalUsers })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
