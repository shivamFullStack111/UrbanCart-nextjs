import User from "@/models/User";

export async function POST(req) {
  try {
    await dbConnect();
    const { user, address } = await req.json();

    const isUserExist = await User.findOne({ _id: user?._id });

    if (!isUserExist) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }
    // rfj
    isUserExist.addresses = [address];

    await isUserExist.save(); // Save the updated user

    return new Response(
      JSON.stringify({
        success: true,
        message: "Address saved successfully",
        user: isUserExist,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
