const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const { engine } = require("express-handlebars");
const errorController = require("./controllers/error");

const app = express();

// app.engine("hbs", engine({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set("view engine", "hbs");
// app.set("view engine", "pug");
app.set("view engine", "ejs");
// if templates are in different folder than 'views'
// app.set('views', 'views')

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use(errorController.get404);

app.listen(3000);
