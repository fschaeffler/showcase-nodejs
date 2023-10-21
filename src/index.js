const http = require('http')
const os = require("os");

http.createServer(function (req, res) {
  res.write(`Welcome on "${os.hostname()}"!`)
  res.end()
}).listen(8080)