const path = require("path");
const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product
router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

// same as .use but filtering to only POST request
router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
