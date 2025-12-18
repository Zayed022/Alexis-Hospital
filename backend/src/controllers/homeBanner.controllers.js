import HomeBanner from "../models/homeBanner.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createHomeBanner = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      ctaText,
      ctaLink,
      isActive,
      order,
    } = req.body;

    const lastBanner = await HomeBanner.findOne().sort({ order: -1 });

const nextOrder = order !== undefined
  ? order
  : lastBanner
    ? lastBanner.order + 1
    : 1;


    const bannerPath = req.files?.bannerImage?.[0]?.path;
    

    if (!bannerPath) return res.status(400).json({ message: "Banner image is required" });

    const bannerUploaded = await uploadOnCloudinary(bannerPath);

    const banner = await HomeBanner.create({
      title,
      subtitle,
      bannerImage: bannerUploaded.url,
      ctaText,
      ctaLink,
      isActive,
      order: nextOrder,
    });

    res.status(201).json({
      success: true,
      message: "Home banner created successfully",
      banner,
    });
  } catch (error) {
    console.error("Create banner error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create home banner",
    });
  }
};


export const getActiveHomeBanners = async (req, res) => {
  try {
    const banners = await HomeBanner.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: banners.length,
      banners,
    });
  } catch (error) {
    console.error("Fetch banners error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch home banners",
    });
  }
};


export const getAllHomeBanners = async (req, res) => {
  try {
    const banners = await HomeBanner.find().sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: banners.length,
      banners,
    });
  } catch (error) {
    console.error("Fetch all banners error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch banners",
    });
  }
};


export const updateHomeBanner = async (req, res) => {
  try {
    const banner = await HomeBanner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Home banner not found",
      });
    }

    // Text updates
    const fields = ["title", "subtitle", "ctaText", "ctaLink", "isActive", "order"];
    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        banner[field] = req.body[field];
      }
    });

    // Image update (optional)
    const bannerPath = req.files?.bannerImage?.[0]?.path;
    if (bannerPath) {
      const uploaded = await uploadOnCloudinary(bannerPath);
      banner.bannerImage = uploaded.url;
    }

    await banner.save();

    res.status(200).json({
      success: true,
      message: "Home banner updated successfully",
      banner,
    });
  } catch (error) {
    console.error("Update banner error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update home banner",
    });
  }
};



export const deleteHomeBanner = async (req, res) => {
  try {
    const banner = await HomeBanner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Home banner not found",
      });
    }

    await banner.deleteOne();

    res.status(200).json({
      success: true,
      message: "Home banner deleted successfully",
    });
  } catch (error) {
    console.error("Delete banner error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete home banner",
    });
  }
};
