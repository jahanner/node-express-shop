const express = require("express");

const router = express.Router();

// /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/add-product' method='post'><input type='text' name='title'><button type='submit'>Add Product</button></input></form>"
  );
});

// same as .use but filtering to only POST request
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
