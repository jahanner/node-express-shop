const express = require("express");

const app = express();

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
  res.send("<h1>USERS</h1>");
});

app.use("/", (req, res, next) => {
  console.log("HOMEPAGE RES");
  res.send("<h1>HOMEPAGE</h1>");
});

app.listen(3000);
