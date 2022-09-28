const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("produnct come here");
});

app.post("/products/prod", (req, res) => {
  res.semd("product posted");
});

app.listen(4000, () => {
  console.log("listen port");
});
