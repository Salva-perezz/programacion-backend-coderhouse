import { productService } from "../services/product.service.js";
import WSresponse from "../libs/WSresponse.js";

const getAllProducts = async (req, res) => {
  try {
    const response = await productService.getAllProducts();

    res.json(new WSresponse(response, "Succes"));
  } catch (err) {
    res.json(new WSresponse(null, "Error", err, 156));
  }
};

const createProduct = async (req, res) => {
  try {
    const response = await productService.createProduct(req.body);

    res.json(new WSresponse(response, "Product created!"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, "Error", err, 189));
  }
};

const getOneProduct = async (req, res) => {};

const updateProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {};

export const productController = {
  getAllProducts,
  createProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
