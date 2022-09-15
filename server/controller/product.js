const Products = require("./../model/Product");

exports.createProduct = async (req, res) => {
  const newProduct = Products(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(402).json({ message: "something went wrong" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(402).json({ message: "Something went wrong" });
  }
};
