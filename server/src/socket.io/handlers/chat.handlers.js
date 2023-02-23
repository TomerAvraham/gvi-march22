function handleChat(socket) {
  socket.on("user-typing", () => {
    console.log("some one is typing");
  });
}

module.exports = handleChat;
