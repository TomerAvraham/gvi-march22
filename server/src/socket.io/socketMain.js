function socketMain(socket) {
  socket.on("test", () => {
    console.log("test event");
  });
}

module.exports = socketMain;
