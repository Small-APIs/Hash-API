const http = require('http');
const crypto = require('crypto');

const port = 8080

const hash = (input) => {
  return crypto.createHash('sha256').update(input + '').digest('hex');
}

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'text/html')
  res.writeHead(200);
  res.end(hash(req.url.slice(1)));
  console.log(req.ip,':', req.url.slice(1));
  //console.log(req.method, req.url, 'HTTP/' + req.httpVersion);
  //for (var name in req.headers)
  //console.log(name + ':', req.headers[name]);
}

const server = http.createServer(requestListener);
server.listen(port);
console.log('Server listening at:', port);
