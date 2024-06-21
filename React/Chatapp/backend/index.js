const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(cors());
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  // console.log("New connection established");
  // console.log("ID - ", socket.id);
  socket.emit("welcome", `Welcome to the server ${socket.id}`);
  //socket.broadcast.emit("welcome", `Welcome to the server ${socket.id}`);

  socket.on("message", (msg) => {
    socket.broadcast.emit("message", { userId: socket.id, message: msg });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit(`User disconnected ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`server start on port ${port}`);
});
