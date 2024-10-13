import { dbConnect } from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function POST(req, res) {
  let limit = 12;

  try {
    await dbConnect();
    // getting page number dynamically from query
    let pageNumber = req.url.split("/").pop();

    const { category, sortBy, color, price, ratingAndAbove, gender } =
      await req.json();

    let query = {};

    if (category) {
      query.category = category;
    }

    if (price && price?.from && price.to) {
      query.price = { $gte: price.from, $lte: price.to };
    }
    if (ratingAndAbove) {
      query.totalRating = { $gte: ratingAndAbove };
    }
    if (gender) {
      query.gender = gender;
    }
    if (color) {
      query["colors.color"] = color;
    }

    // for sorting
    let sortQuery = {};
    if (sortBy == "hightolow") {
      sortQuery.price = -1;
    } else if (sortBy == "lowtohigh") {
      sortQuery.price = 1;
    } else {
      sortQuery.createdAt = -1;
    }

    console.log(query, sortQuery);

    const products = await Product.find(query)
      .sort(sortQuery)
      .skip((pageNumber - 1) * limit)
      .limit(8);

    return new Response(
      JSON.stringify({ success: true, message: "products get", products })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message })
    );
  }
}
