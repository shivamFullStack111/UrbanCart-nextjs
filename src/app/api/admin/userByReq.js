import { JWT_SECRET } from "@/app/utils";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function userByReq(req) {
  const token = req.cookies.get("token_urbancart").value;
  const { user } = jwt.verify(token, JWT_SECRET);

  const isExist = await User.findOne({ email: user?.email });

  return isExist;
}
