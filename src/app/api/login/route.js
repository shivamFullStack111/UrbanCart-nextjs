import { JWT_SECRET } from "@/app/utils";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  const isExist = await User.findOne({ email: email });

  if (!isExist) {
    return new Response(
      JSON.stringify({ success: false, message: "user not found" })
    );
  }

  const compare = await bcrypt.compare(password, isExist.password);
  console.log(compare);

  if (!compare) {
    return new Response({
      success: false,
      message: "your password is incorrect",
    });
  }

  const token = await jwt.sign({ user: isExist }, JWT_SECRET, {
    expiresIn: "90d",
  });

  return new Response(
    JSON.stringify({
      success: true,
      message: "login successfully",
      user: isExist,
      token,
    })
  );
}
