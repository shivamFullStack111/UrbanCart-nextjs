import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";

export async function GET(request) {
  await dbConnect();

  return new Response(
    JSON.stringify({ success: true, message: "login success" })
  );
}
