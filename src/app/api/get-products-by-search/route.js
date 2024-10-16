import Product from "@/models/Product";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const { value, pageNumber } = await req.json();

    // Space ko remove karke lowercase me convert karenge
    let newValue = value?.replace(/\s/g, "").toLowerCase();

    // Har page par kitne items chahiye
    let items = 8;
    let skip = (pageNumber - 1) * items;

    // Check if newValue is a valid ObjectId
    let idQuery = mongoose.Types.ObjectId.isValid(newValue)
      ? { _id: newValue }
      : null;

    // Products ko query karne ke liye
    const products = await Product.find({
      $or: [
        idQuery, // Yeh tabhi add hoga jab newValue ek valid ObjectId ho
        { category: new RegExp(newValue, "i") },
        { gender: new RegExp(newValue, "i") },
        { title: new RegExp(newValue, "i") },
        { description: new RegExp(newValue, "i") },
      ].filter(Boolean), // null values ko remove karta hai
    })
      .skip(skip)
      .limit(items);

    return new Response(JSON.stringify({ success: true, products: products }));
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
