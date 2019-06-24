const express = require("express");
const app = express();
const port = 3000;

const main = require("./routes/main/main");

app.use(express.json());
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});
app.use("/test", main);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
