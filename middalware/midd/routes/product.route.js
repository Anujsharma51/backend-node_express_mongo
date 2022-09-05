const { Router } = require("express");

const productRoutes = Router();

productRoutes.get("/get", (req, res) => {
  res.send("this is a product get request");
});

module.exports = productRoutes;
