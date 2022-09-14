const express = require("express");

const { getAllProducts, createProduct } = require("./../controller/product");

const router = express.Router();

//get all products
router.get("/", getAllProducts);
router.post("/createproduct", createProduct);

module.exports = router;
