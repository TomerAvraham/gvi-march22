require("dotenv").config();
const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const initialMongoConnection = require("./database/initialConnection");
const socketMain = require("./socket.io/socketMain");
const cors = require("cors");
const routes = require("./routes/index");

const httpServer = createServer(app);
initialMongoConnection();

app.use(cors());
app.use(express.json());

app.use(routes);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", socketMain);

const port = process.env.PORT || 9001;

httpServer.listen(port, () => {
  console.log("Listing on port: " + port);
});
