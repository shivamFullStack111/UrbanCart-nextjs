import User from "@/models/User";

export async function POST(req) {
  try {
    const { userid } = await req.json();

    await User.findOneAndDelete({ _id: userid });

    return new Response(
      JSON.stringify({ success: true, message: "User deleted successfully" })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
