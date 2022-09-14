const mongoos = require("mongoose");

const productSchema = mongoos.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    ratting: {
      type: Number,
      default: 0,
    },
    review: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoos.model("Product", productSchema);
