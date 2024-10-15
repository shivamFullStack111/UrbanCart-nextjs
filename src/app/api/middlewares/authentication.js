import { JWT_SECRET } from "@/app/utils";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";
export const authentication = async (req, res, next) => {
  try {
    await dbConnect();
    const { authorization } = req.headers;

    if (!authorization)
      return new Response(
        JSON.stringify({ success: false, message: "token not found" })
      );

    const { user } = jwt.verify(authorization, JWT_SECRET);

    if (!user)
      return new Response(
        JSON.stringify({ success: false, message: "token is expired" })
      );

    const isExist = await User.findOne({ email: user.email });

    if (!isExist)
      return res.send({
        success: false,
        message: "user is not found or token is incorrect",
      });

    req.user = isExist;
    console.log("user:------------", isExist);
    next();
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
};
