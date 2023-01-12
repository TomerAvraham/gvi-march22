const { model, Schema } = require("mongoose");
const { CONNECT_STATUS } = require("../constants/connect.constants");

const connectSchema = new Schema({
  entrepreneurId: { type: Schema.Types.ObjectId, required: true },
  consultantId: { type: Schema.Types.ObjectId, required: true },
  status: {
    type: String,
    enum: Object.values(CONNECT_STATUS),
    default: CONNECT_STATUS.PENDING,
  },
});

const Connect = model("Connect", connectSchema);

module.exports = Connect;
