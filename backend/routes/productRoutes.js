import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

//zamiast try catch stosujemy asyncHandler

// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    //tests
    // res.status(401);
    // throw new Error("Not authorized!");
    // throw new Error("No products available!");
    res.json(products);
  })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("We are very sorry! 😢 Product not found ... ");
    }
  })
);

export default router;
