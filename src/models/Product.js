// models/Product.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Corrected typo and added validation
    gender: { type: String, required: true },
    category: { type: String, required: true, index: true }, // Indexed for faster queries
    brand: { type: String, required: true },
    clothType: { type: String, required: true },
    stockKeepingUnit: { type: Number, unique: true, required: true }, // Unique SKU
    mrpPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    stock: { type: Number, required: true, min: 0 }, // Prevent negative stock
    description: { type: String, required: true },
    images: { type: [String], required: true }, // Array of image URLs
    // Specification
    colors: { type: [String], default: [] },
    sizes: { type: [String], default: [] },
    material: { type: String, required: true },
    clothPattern: { type: String, required: true },
    fitType: { type: String, required: true },
    sleeveType: { type: String, required: true },
    neckType: { type: String, required: true },
    heelHeight: { type: Number, default: 0 }, // Optional for non-shoe products
    soleMaterial: { type: String, default: "" }, // Optional
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

// Use singular model name for clarity
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
