import mongoose from "mongoose";

const BeforeAfterCaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    serviceCategory: {
      type: String,
      enum: ["Medical", "Cosmetology"],
      required: true,
    },

    beforeImage: {
      type: String,
      required: true,
    },

    afterImage: {
      type: String,
      required: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("BeforeAfterCase", BeforeAfterCaseSchema);
