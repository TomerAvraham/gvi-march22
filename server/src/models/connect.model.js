const { model, Schema } = require("mongoose");
const { CONNECT_STATUS } = require("../constants/connect.constants");

const connectSchema = new Schema({
  sendRequestId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  getRequestId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: Object.values(CONNECT_STATUS),
    default: CONNECT_STATUS.PENDING,
  },
});

const Connect = model("Connect", connectSchema);

module.exports = Connect;
