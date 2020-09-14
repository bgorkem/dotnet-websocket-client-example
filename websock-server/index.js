const WebSocket = require('ws');
const fs = require('fs');
const db = require('./lib/db');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received file size: => ${message.length}`);
    // fs.writeFileSync('output.jpg', message);
    const res = db.insert(message).then((res) => {
      console.log('Insert completed', res);
      ws.send(JSON.stringify(res));
    });
  });
});
