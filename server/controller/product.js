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

//Get all Products with Pagination
exports.getAllProducts = async (req, res) => {
  try {
    const totalProducts = await Products.find().countDocuments({});
    const pageSize = 10;
    const page = parseInt(req.query.page || "0");

    const products = await Products.find()
      .limit(pageSize)
      .skip(pageSize * page);
    res
      .status(200)
      .json({ products, totalPages: Math.ceil(totalProducts / pageSize) });
  } catch (error) {
    res.status(402).json({ message: "Something went wrong" });
  }
};

//search products
exports.searchProducts = async (req, res) => {
  const searchValue = req.body;
  try {
    const searchProduct = await Products.find({
      price: { $gt: searchValue.start, $lt: searchValue.end },
    });
    res.status(200).json({ searchProduct });
  } catch (error) {
    res.status(402).json({ message: "Something went wrong." });
  }
};

//Search products by Catagory
exports.searchByCatagory = async (req, res) => {
  try {
    const searchByCategory = await Products.find(req.body);
    res.status(200).json({ searchByCategory });
  } catch (error) {
    res.status(402).json({ message: "Something went wrong." });
  }
};

//get single Product.
exports.getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const singleProduct = await Products.findById(id);
    res.status(200).json({ singleProduct });
  } catch (error) {
    res.status(402).json({ message: "Something went wrong." });
  }
};
