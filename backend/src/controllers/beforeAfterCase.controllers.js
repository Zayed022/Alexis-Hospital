import BeforeAfterCase from "../models/beforeAfterCase.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


export const createBeforeAfterCase = async (req, res) => {
  try {
    const { title, description, serviceCategory, order } = req.body;

    const beforePath = req.files?.beforeImage?.[0]?.path;
    const afterPath = req.files?.afterImage?.[0]?.path;

    if (!beforePath || !afterPath) {
      return res.status(400).json({
        success: false,
        message: "Both before and after images are required",
      });
    }

    const beforeUploaded = await uploadOnCloudinary(beforePath);
    const afterUploaded = await uploadOnCloudinary(afterPath);

    const newCase = await BeforeAfterCase.create({
      title,
      description,
      serviceCategory,
      beforeImage: beforeUploaded.url,
      afterImage: afterUploaded.url,
      order,
    });

    res.status(201).json({
      success: true,
      message: "Before/After case created successfully",
      case: newCase,
    });
  } catch (error) {
    console.error("Create before-after case error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create before/after case",
    });
  }
};


export const getAllBeforeAfterCases = async (req, res) => {
  try {
    const cases = await BeforeAfterCase.find()
      .sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cases.length,
      cases,
    });
  } catch (error) {
    console.error("Fetch cases error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch before/after cases",
    });
  }
};


export const getSingleBeforeAfterCase = async (req, res) => {
  try {
    const caseStudy = await BeforeAfterCase.findById(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: "Case not found",
      });
    }

    res.status(200).json({
      success: true,
      case: caseStudy,
    });
  } catch (error) {
    console.error("Fetch case error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch case",
    });
  }
};


export const updateBeforeAfterCase = async (req, res) => {
  try {
    const caseStudy = await BeforeAfterCase.findById(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: "Case not found",
      });
    }

    const fields = ["title", "description", "serviceCategory", "order"];
    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        caseStudy[field] = req.body[field];
      }
    });

    const beforePath = req.files?.beforeImage?.[0]?.path;
    const afterPath = req.files?.afterImage?.[0]?.path;

    if (beforePath) {
      const uploaded = await uploadOnCloudinary(beforePath);
      caseStudy.beforeImage = uploaded.url;
    }

    if (afterPath) {
      const uploaded = await uploadOnCloudinary(afterPath);
      caseStudy.afterImage = uploaded.url;
    }

    await caseStudy.save();

    res.status(200).json({
      success: true,
      message: "Before/After case updated successfully",
      case: caseStudy,
    });
  } catch (error) {
    console.error("Update case error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update before/after case",
    });
  }
};


export const deleteBeforeAfterCase = async (req, res) => {
  try {
    const caseStudy = await BeforeAfterCase.findById(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: "Case not found",
      });
    }

    await caseStudy.deleteOne();

    res.status(200).json({
      success: true,
      message: "Before/After case deleted successfully",
    });
  } catch (error) {
    console.error("Delete case error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete before/after case",
    });
  }
};
