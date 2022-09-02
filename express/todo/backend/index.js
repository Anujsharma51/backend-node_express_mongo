const express = require("express");

const fs = require("fs");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("../todo/db.json", { encoding: "utf8" }, (err, data) => {
    res.send(JSON.parse(data));
  });
});

app.post("/send", (req, res) => {
  const x = req.body;
  fs.readFile("../todo/db.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      res.send("somthing went wrong");
    }
    var parseData = JSON.parse(data);
    parseData.Todo = [...parseData.Todo, req.body];
    fs.writeFile("../todo/db.json", JSON.stringify(parseData), (err, data) => {
      if (err) {
        res.send("somthing went wrong in file");
      }
      res.send("file uploaded");
    });
  });
});
app.listen(8080, () => {
  console.log("server started...");
});
