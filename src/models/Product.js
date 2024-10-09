const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  tittle: String,
  category: String,
  subCategory: String,
  brand: String,
  stockKeepingUnit: Number,
  mrpPrice: Number,
  sellingPrice: Number,
  stock: Number,
  description: String,
  images: Array,
  // specification
  colors: Array,
  sizes: Array,
  material: String,
  clothPattern: String,
  fitType: String,
  sleeveType: String,
  neckType: String,
  heelHeight: String,
  soleMaterial: String,
});

const Product =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default Product;
