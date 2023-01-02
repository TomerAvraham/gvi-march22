const User = require("../../models/user.model");
const emitReceivedDataFromDb = require("../../server");

async function login(data, socket) {
  const { username } = data;
  const user = await User.findOne({ username });
  if (!user) {
    const newUser = await User.create({ username });
    emitReceivedDataFromDb(newUser, socket);
  } else {
    emitReceivedDataFromDb(user, socket);
  }
}

module.exports = login;
