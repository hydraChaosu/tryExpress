const express = require("express");
const app = express();
const port = 3000;

const main = require("./routes/main/main");

const myItems = [
  {
    id: 0,
    name: "cat"
  }
];

app.use(express.json());
app.set("view engine", "pug");

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/test", main);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
