const express = require("express");

const {
  getAllProducts,
  createProduct,
  searchProducts,
} = require("./../controller/product");

const router = express.Router();

//get all products
router.get("/", getAllProducts);
router.post("/createproduct", createProduct);
router.post("/search", searchProducts);

module.exports = router;
