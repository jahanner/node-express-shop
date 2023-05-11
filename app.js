const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(3000);
