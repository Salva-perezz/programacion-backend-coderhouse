const { Router } = require("express");
const Product = require("../models/product.model");

const router = Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await Product.find();

      res.status(200).json(products);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, price } = req.body;
      const createdProduct = await Product.create({ name, price });

      res.status(201).json(createdProduct);
    } catch (err) {
      res.sendStatus(500);
    }
  });

router
  .route("/:id")
  .delete(async (req, res) => {
    try {
      const productId = req.params.id;
      await Product.deleteOne({ _id: productId });

      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put(async (req, res) => {
    try {
      const productUpdated = req.body;
      const productId = req.params.id;
      const dbUpdatedProduct = await Product.updateOne(
        { _id: productId },
        productUpdated
      );

      res.status(200).json(dbUpdatedProduct);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);

      res.status(200).json(product);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;
