const express = require("express");
const router = express.Router();
let id = 1;
let data = [{ id: 0, name: "cat" }];

router.get("/", (req, res) => {
  res.json(data);
});

router.post("/", (req, res) => {
  const newItem = { id, name: req.body.name };
  id++;
  data.push(newItem);
  res.json(newItem);
  //   res.end()
});

router.delete("/:id", (req, res) => {
  const newArr = data.filter(item => item.id !== Number(req.params.id));
  console.log(newArr, req.params.id);
  data = newArr;
  res.json(newArr);
  //   res.end();
});

module.exports = router;
