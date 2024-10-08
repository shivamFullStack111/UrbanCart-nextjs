import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(req) {
  try {
    await dbConnect();

    // Await the JSON parsing
    const body = await req.json();
    console.log("Request body:", body);

    // Create a new user
    const newUser = new User(body);

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    return new Response(
      JSON.stringify({ success: true, message: "Registration successful" }),
      { status: 201 } // 201 Created status
    );
  } catch (error) {
    console.error("Error occurred:", error); // Log error for debugging
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
