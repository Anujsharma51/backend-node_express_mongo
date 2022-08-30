const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/quiz") {
    res.end("quiz");
  }

  if (req.url == "/file") {
    fs.readFile("./Quiz.txt", { encoding: "utf8" }, (err, data) => {
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080, () => {
  console.log("listen on port 8080");
});
