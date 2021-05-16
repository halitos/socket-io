const express = require("express");
const app = express();
const PORT = 5050;
const http = require("http").createServer();

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.emit("greet", "Hello, welcome to socket IO");
  console.log("New client connected");
});

http.listen(PORT, () => {
  console.log(`Server lsitening on port ${PORT}`);
});
