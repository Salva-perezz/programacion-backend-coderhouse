import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const productModel = mongoose.model("product", productSchema);

export const Product = productModel;
