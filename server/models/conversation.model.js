const { Schema, model } = require("mongoose");

const conversationSchema = new Schema({
  name: { type: String },
  userIds: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
});

const Conversation = model("Conversation", conversationSchema);

module.exports = Conversation;
