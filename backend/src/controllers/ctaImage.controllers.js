import CtaImage from "../models/ctaImage.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const uploadCtaImage = async (req, res) => {
  try {
    // Validate file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "CTA image is required",
      });
    }

    const { isActive = true } = req.body;

    // Upload to Cloudinary
    const uploaded = await uploadOnCloudinary(req.file.path);

    if (!uploaded?.url) {
      return res.status(500).json({
        success: false,
        message: "Failed to upload image",
      });
    }

    // Disable previously active CTA images
    await CtaImage.updateMany(
      { isActive: true },
      { $set: { isActive: false } }
    );

    // Save new CTA image
    const image = await CtaImage.create({
      image: uploaded.url,
      isActive: Boolean(isActive),
    });

    res.status(201).json({
      success: true,
      message: "CTA image uploaded successfully",
      image,
    });
  } catch (error) {
    console.error("CTA upload error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};



export const getActiveCtaImage = async (req, res) => {
  try {
    const image = await CtaImage.findOne({ isActive: true });

    res.status(200).json({
      success: true,
      image,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch CTA image",
    });
  }
};

export const deleteCtaImage = async (req, res) => {
  try {
    const ctaImage = await CtaImage.findById(req.params.id);

    if (!ctaImage) {
      return res.status(404).json({
        success: false,
        message: "CTA Image not found",
      });
    }

    await ctaImage.deleteOne();

    res.status(200).json({
      success: true,
      message: "CTA Image deleted successfully",
    });
  } catch (error) {
    console.error("Delete banner error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete home banner",
    });
  }
};
