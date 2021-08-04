const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
    transports: ["websocket"],
  },
});

const PORT = process.env.PORT || 5050;

app.use(express.json());

const rooms = new Map();

app.get("/rooms", function (req, res) {
  res.json(rooms);
});

app.post("/rooms", function (req, res) {
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }
  res.send();
});

io.on("connection", (socket) => {
  socket.on("ROOM_JOIN", ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get("users").set(socket.id, userName);
    const users = [...rooms.get(roomId).get("users").values()];
    socket.to(roomId).emit("ROOM_JOINED", users);
  });
  console.log("user connected", socket.id);
});

server.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }

  console.log(`Server has been started on port ${PORT}...`);
});
