import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    // UI – LEFT SIDE
    badgeText: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    // BULLET LIST
    rightPoints: {
      type: [String],
      default: [],
      validate: {
        validator: function (arr) {
          return arr.length > 0; // at least 1 bullet point
        },
        message: "At least one bullet point is required",
      },
    },

    // CTA
    buttonText: {
      type: String,
      default: "Explore Services",
    },

    // RIGHT SIDE IMAGE GRID (IMPORTANT PART)
    images: {
      type: [String], // Cloudinary URLs
      validate: [
        {
          validator: function (arr) {
            return arr.length >= 1;
          },
          message: "At least 1 image is required",
        },
        {
          validator: function (arr) {
            return arr.length <= 4;
          },
          message: "Maximum 4 images are allowed",
        },
      ],
      required: true,
    },

    // ORDERING (if multiple sections later)
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", ServiceSchema);
