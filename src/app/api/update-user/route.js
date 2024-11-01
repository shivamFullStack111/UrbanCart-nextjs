import User from "@/models/User";

export async function POST(req) {
  try {
    const { user } = await req.json();

    await User.findOneAndUpdate({ email: user?.email }, user);

    return new Response(
      JSON.stringify({ success: true, message: "Role changed successfully" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
