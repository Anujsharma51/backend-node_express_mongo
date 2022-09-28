const express = require("express");
const { taskModel } = require("../model/task.js");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  const signupdata = await new taskModel(req.body);

  signupdata.save((err, data) => {
    if (err) {
      res.status(500).send({ message: "error occurred" });
    }
    return res.send({ message: "sign up success", token: 5432 });
  });
});
authRouter.post("/login", async (req, res) => {
  const logindata = await taskModel.find(req.body);

  if (logindata.length == 0) {
    res.send("wrong credentials");
  } else {
    res.send(logindata);
  }
});

module.exports = authRouter;
