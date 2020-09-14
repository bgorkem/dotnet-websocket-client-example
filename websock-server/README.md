# WebSocket server

Uses ws node library for a simple demo websocket server.

https://www.npmjs.com/package/ws

Writes incoming image bytes into SqLite3 database..


## Installation

In this server project folder run

```
npm i

```

To create an empty database in the server folder './database.db'

```
npm run db:create

```


## Start Server

```
npm run serve

```

This will start a WebSocket server locally on port 3000, listening for binary messages.

When the socket receives a binary message, it will insert it into local Sqlite database.


