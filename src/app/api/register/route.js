import { JWT_SECRET } from "@/app/utils";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await dbConnect();

    const { name, email, phoneNumber, password } = await req.json();

    if (!email || !name || !phoneNumber || !password) {
      return new Response(
        JSON.stringify({ message: "all field are required", success: false })
      );
    }

    const isExist = await User.findOne({ email: email });

    if (isExist) {
      return new Response(
        JSON.stringify({ message: "email already registered", success: false })
      );
    }

    const hashpass = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: hashpass,
      phoneNumber,
    });

    const token = await jwt.sign({ user: newUser }, JWT_SECRET, {
      expiresIn: "90d",
    });

    await newUser.save();

    return new Response(
      JSON.stringify({
        message: "registration successfull ",
        success: true,
        user: newUser,
        token,
      })
    );
  } catch (error) {
    console.error("Error occurred:", error); // Log error for debugging
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
