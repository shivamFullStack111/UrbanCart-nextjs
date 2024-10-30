// models/Product.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String }, // Corrected typo and added validation
    gender: { type: String },
    category: { type: String, index: true }, // Indexed for faster queries
    brand: { type: String },
    clothType: { type: String },
    stockKeepingUnit: { type: Number, unique: true }, // Unique SKU
    mrpPrice: { type: Number },
    sellingPrice: { type: Number },
    stock: { type: Number, min: 0 }, // Prevent negative stock
    totalSale: { type: Number, default: 0, min: 0 }, // Prevent negative stock
    description: { type: String },
    images: { type: [String] }, // Array of image URLs
    totalRating: { type: Number, default: 0 },
    // Specification
    colors: [
      {
        name: String,
        color: String,
      },
    ],

    sizes: { type: [String], default: [] },
    material: { type: String },
    clothPattern: { type: String },
    fitType: { type: String },
    sleeveType: { type: String },
    neckType: { type: String },
    heelHeight: { type: Number, default: 0 }, // Optional for non-shoe products
    soleMaterial: { type: String, default: "" }, // Optional
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

// Use singular model name for clarity
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
