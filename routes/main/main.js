const express = require("express");
const router = express.Router();
router.get("/main", (req, res) => {
  res.send("welcome in main page");
});

router.post("/main", (req, res) => {
  //   console.log(myItems);
  //   res.send(`welcome in main page POST ${req.body} ${req.body.name}`);
  res.render("index", {
    title: "Hey",
    message: `Hello there! ${req.body.name}`
  });
});

router.delete("/main", (req, res) => {
  res.send("welcome in main page DELETE");
});
module.exports = router;
