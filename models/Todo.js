const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    text: {
      type: String,
      required: [true, "Todo text is required"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
      enum: [true, false],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Todo", todoSchema);
