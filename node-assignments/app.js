const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second Middleware");
//   res.send("<h1>SUCCESS YO</h1>");
// });

// have to have more specific middleware first
app.use("/users", (req, res, next) => {
  console.log("USERS RES");
  res.sendFile(path.join(__dirname, "views", "users.html"));
});

app.use("/", (req, res, next) => {
  console.log("HOMEPAGE RES");
  res.sendFile(path.join(__dirname, "views", "basic.html"));
});

app.listen(3000);
