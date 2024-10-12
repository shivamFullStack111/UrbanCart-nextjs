const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    tittle: String,
    gender: String,
    category: String,
    brand: String,
    clothType: String,
    stockKeepingUnit: Number,
    mrpPrice: Number,
    sellingPrice: Number,
    stock: Number,
    description: String,
    images: Array,
    totalRating: Number,
    totalSale: Number,
    // specification
    colors: Array,
    sizes: Array,
    material: String,
    clothPattern: String,
    fitType: String,
    sleeveType: String,
    neckType: String,
    heelHeight: Number,
    soleMaterial: String,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default Product;
