const express = require("express");

const app = express();

app.use(express.json());
const productRoutes = require("./routes/product.route");

app.use("/pro", productRoutes);

app.get("/", function (req, res) {
  res.send("home main page");
});
app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
