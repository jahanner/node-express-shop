const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = [];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("form");
});

app.get("/users", (req, res, next) => {
  res.render("users", { users: users });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.name });
  console.log({ users });
  res.redirect("users");
});

app.listen(3000);
