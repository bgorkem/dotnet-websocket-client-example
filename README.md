# dotnet-websocket-client-example

This is a demo app which shows how to send a .jpg file over WebSockets from a dotnet core client to a websocket server

## websock-server
This is a nodejs websocket server which will listen connections and save incoming bytearray as a .jpg file.

To run, follow steps in server [README.md](./websock-server/README.md)

## dotnet-websock-client
This is a dotnet-core console project, opening a websocket client and then sending a sample file to server.

To run, follow steps in client [README.md](./dotnet-websock-client/README.md)



