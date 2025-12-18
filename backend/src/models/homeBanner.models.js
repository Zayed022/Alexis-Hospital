import mongoose from "mongoose";

const HomeBannerSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  bannerImage: String,
  ctaText: String,
  ctaLink: String,
  isActive: { type: Boolean, default: true },
  order: Number,           // controls slide sequence

}, { timestamps: true });

export default mongoose.model("HomeBanner", HomeBannerSchema);
