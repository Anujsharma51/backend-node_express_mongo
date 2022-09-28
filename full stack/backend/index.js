const express = require("express");
const connection = require("./db");
const authRouter = require("./routes/auth.routes");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.listen(8080, async () => {
  try {
    await connection;
    console.log("port is runing");
  } catch (err) {
    console.log(err);
  }
});
