const http = require("http");
// const fs = require("fs");

// const options = {
//   key: fs.readFileSync("test/fixtures/keys/agent2-key.pem"),
//   cert: fs.readFileSync("test/fixtures/keys/agent2-cert.pem")
// };

http.createServer((req, res) => {
  // res.setHeader("content-Type", "application/json");
  res.statusCode = 404;
  res.write(JSON.stringify("ERROR 404"));
  res.end();
}).listen(8000);
console.log("listening")
