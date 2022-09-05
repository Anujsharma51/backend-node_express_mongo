const { Router } = require("express");
const testRoutes = Router();

testRoutes.get("/", (req, res) => {
  res.send("home");
});

testRoutes.get("/home", (req, res) => {
  res.send("home page");
});
module.exports = testRoutes;
