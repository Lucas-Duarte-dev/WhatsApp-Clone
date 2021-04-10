const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);
const socket = require("socket.io");

const io = socket.listen(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("view", path.join(__dirname, "public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
let messages = [];
io.on("connection", (socket) => {
  console.log(`Conectado ${socket.id}`);

  socket.emit("previousMessage", messages);

  socket.on("sendMessage", (message) => {
    messages.push(message);
    socket.broadcast.emit("receivedMessage", message);
  });
});

server.listen(3333);
