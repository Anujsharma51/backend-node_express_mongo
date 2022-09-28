const express = require("express");

const auth = require("./routes/apiRoute");

const app = express();
app.use(express.json());

app.use("/", auth);

app.listen(8080, () => console.log(`port is running on 8080`));
