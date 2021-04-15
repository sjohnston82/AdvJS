const fs = require('fs')
const http = require('http')
const portNumber = process.argv[2]
const file = process.argv[3]

const server = http.createServer(function(req, res) {
  fs.createReadStream(file).pipe(res)
})
server.listen(portNumber)