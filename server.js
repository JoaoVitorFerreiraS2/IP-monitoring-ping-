const http = require('http');
const ping = require('ping');

const host = 'Put the desired IP';

const server = http.createServer((req, res) => {
  ping.sys.probe(host, (isAlive) => {
    if (isAlive) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.write(`O IP ${host} está online!`);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.write(`O IP ${host} não está respondendo.`);
    }
    res.end();
  });
});

server.listen(8080, () => {
  console.log('server running on http://localhost:8080/');
});
