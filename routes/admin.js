const path = require("path");
const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product
router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

// same as .use but filtering to only POST request
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
