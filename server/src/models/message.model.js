const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  message: { type: String, required: true },
  connectId: {
    type: Schema.Types.ObjectId,
    ref: "Connect",
    required: true,
  },
  date: { type: Date, required: true },
  from: { type: Schema.Types.ObjectId, ref: "User", require: true },
});

const Message = model("Message", messageSchema);
module.exports = Message;
