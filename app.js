const io = require("socket.io-client");

let socket = io.connect("http://localhost:5050");

socket.on("greet", (data) => {
  console.log("Received:", data);
});
