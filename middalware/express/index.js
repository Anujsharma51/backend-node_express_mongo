const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.post("/products/create", (req, res) => {
  const postData = req.body;
  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    const allData = JSON.parse(data);
    allData.products = [...allData.products, postData];

    fs.writeFile(
      "./products.json",
      JSON.stringify(allData),
      { encoding: "utf-8" },
      (err, data) => {
        if (err) {
          res.send("show error");
        } else {
          res.send("product add success");
        }
      }
    );
  });
});

app.get("/products", (req, res) => {
  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    res.send(JSON.parse(data));
  });
});
app.delete(`/products/:productId`, (req, res) => {
  const { productId } = req.params;

  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    const allData = JSON.parse(data);

    allData.products = allData.products.filter((el) => el.id != productId);
    fs.writeFile(
      "./products.json",
      JSON.stringify(allData),
      { encoding: "utf-8" },
      (err, data) => {
        if (err) {
          res.send("show error");
        } else {
          res.send("product add success");
        }
      }
    );
  });
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
