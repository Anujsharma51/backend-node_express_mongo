const express = require("express");
const { UserModel } = require("../model/user.js");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  const signupdata = await new UserModel(req.body);

  signupdata.save((err, data) => {
    if (err) {
      res.status(500).send({ message: "error occurred" });
    }
    return res.send({ message: "sign up success", token: 5432 });
  });
});
authRouter.post("/login", async (req, res) => {
  const logindata = await UserModel.find(req.body);
  console.log("logindata:", logindata);

  if (logindata.length == 0) {
    res.send("wrong credentials");
  } else {
    // console.log("logindata:", logindata);
    res.send(logindata);
  }
});

module.exports = authRouter;
