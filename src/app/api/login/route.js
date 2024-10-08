import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";

export async function GET(request) {
  await dbConnect();
  const newUser = new User({
    name: "John Doe",
    email: "john@gmail.com",
    phoneNumber: 3487845873598,
    password: "4gbfejhvbjebf",
  });

  await newUser.save();
  return new Response(
    JSON.stringify({ success: true, message: "login success" })
  );
}
