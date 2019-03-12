const http = require("http");
// const fs = require("fs");


http.createServer((req, res) => {
  // res.setHeader("content-Type", "application/json");
  res.statusCode = 404;
  res.write(JSON.stringify("ERROR 404"));
  res.end();
}).listen(8000);
console.log("listening")


//TEST