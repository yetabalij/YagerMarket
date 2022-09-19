const express = require("express");

const {
  getAllProducts,
  createProduct,
  searchProducts,
  searchByCatagory,
  getSingleProduct,
} = require("./../controller/product");

const router = express.Router();

//get all products
router.get("/", getAllProducts);
router.post("/createproduct", createProduct);
router.post("/search", searchProducts);
router.post("/catagorysearch", searchByCatagory);
router.get("/singleproduct/:id", getSingleProduct);

module.exports = router;
