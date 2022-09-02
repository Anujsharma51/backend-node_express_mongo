const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/send", (req, res) => {
  const reqUser = req.body;
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      res.send("err showing");
    }
    const result = JSON.parse(data);
    result.user = [...result.user, reqUser];
    fs.writeFile(
      "./data.json",
      JSON.stringify(result),
      { encoding: "utf8" },
      (err, data) => {
        console.log("data:", data);
      }
    );
    res.send("view");
  });
});
app.listen(1234, () => {
  console.log("server start port 1234");
});
