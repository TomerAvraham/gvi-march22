const { model, Schema } = require("mongoose");
const { CONNECT_STATUS } = require("../constants/connect.constants");

const connectSchema = new Schema({
  entrepreneurId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  consultantId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: Object.values(CONNECT_STATUS),
    default: CONNECT_STATUS.PENDING,
  },
  requestedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    immutable: true,
  },
  createAt: { type: Date, default: Date.now },
});

const Connect = model("Connect", connectSchema);

module.exports = Connect;
