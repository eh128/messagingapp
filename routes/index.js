var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: `${new Date().getHours()}:${new Date().getMinutes()}`,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: `${new Date().getHours()}:${new Date().getMinutes()}`,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { message: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: `${new Date().getHours()}:${new Date().getMinutes()}`,
  });
  res.redirect("/");
});
module.exports = router;
