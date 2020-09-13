const WebSocket = require('ws');
const fs = require('fs');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received file size: => ${message.length}`);
    fs.writeFileSync('output.jpg', message);
  });

  ws.send('Hello! Message From Server!!');
});
