const handleChat = require("./handlers/chat.handlers");

function socketMain(socket) {
  console.log("user connected");

  handleChat(socket);
}

module.exports = socketMain;
