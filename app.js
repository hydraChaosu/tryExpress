const express = require("express");
const app = express();
const port = 3000;

const main = require("./routes/main/main");
const myapi = require("./routes/api/api");

app.use(express.json());
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});
app.use("/test", main);
app.use("/api", myapi);
app.use(express.static("public"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
