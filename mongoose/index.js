const express = require("express");

const { connection, StudentModel } = require("./db.js");

const app = express();

app.use(express.json());

app.get("/student", async (req, res) => {
  const results = await StudentModel.find();
  res.send(results);
});
app.post("/student", async (req, res) => {
  const results = await StudentModel(req.body);

  await results.save();
  res.send(results);
});

app.listen(1234, async () => {
  try {
    let res = await connection;
  } catch {
    console.log("failed to connet to database");
  }
  console.log("port is running ");
});
