
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  const baseUrl = "http://10.200.200.2:5000";
  server.get('/api/sensor', (req, res) => {
    const url = `${baseUrl}/sensor`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("server fetch", data)
    })
    .catch(err => console.log("server fetch failed", err));
    res.send({a: 1});
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(32147, "noll.no-ip.info", (err) => {
    if(err)  {
      throw err;
    }
    console.log('> Ready on http://localhost:32147')
  })
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});