import Service from "../models/service.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

/**
 * CREATE SERVICE
 * POST /api/services
 */
export const createService = async (req, res) => {
  try {
    const {
      badgeText,
      title,
      description,
      rightPoints,
      buttonText,
      order,
    } = req.body;

    const imageFiles = req.files?.images;

    if (!imageFiles || imageFiles.length < 1) {
      return res.status(400).json({
        success: false,
        message: "At least 1 image is required",
      });
    }

    if (imageFiles.length > 4) {
      return res.status(400).json({
        success: false,
        message: "Maximum 4 images are allowed",
      });
    }

    const uploadedImages = [];
    for (const file of imageFiles) {
      const uploaded = await uploadOnCloudinary(file.path);
      uploadedImages.push(uploaded.url);
    }

    const service = await Service.create({
      badgeText,
      title,
      description,
      rightPoints: Array.isArray(rightPoints)
        ? rightPoints
        : JSON.parse(rightPoints),
      buttonText,
      images: uploadedImages,
      order,
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    console.error("Create service error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create service",
    });
  }
};

/**
 * GET ALL SERVICES (Public)
 * GET /api/services
 */
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find()
      .sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.error("Fetch services error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

/**
 * GET SINGLE SERVICE
 * GET /api/services/:id
 */
export const getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    console.error("Fetch service error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};

/**
 * UPDATE SERVICE
 * PUT /api/services/:id
 */
export const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const fields = [
      "badgeText",
      "title",
      "description",
      "buttonText",
      "order",
    ];

    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        service[field] = req.body[field];
      }
    });

    if (req.body.rightPoints !== undefined) {
      service.rightPoints = Array.isArray(req.body.rightPoints)
        ? req.body.rightPoints
        : JSON.parse(req.body.rightPoints);
    }

    const imageFiles = req.files?.images;
    if (imageFiles) {
      if (imageFiles.length < 1 || imageFiles.length > 4) {
        return res.status(400).json({
          success: false,
          message: "Images must be between 1 and 4",
        });
      }

      const uploadedImages = [];
      for (const file of imageFiles) {
        const uploaded = await uploadOnCloudinary(file.path);
        uploadedImages.push(uploaded.url);
      }

      service.images = uploadedImages;
    }

    await service.save();

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    console.error("Update service error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update service",
    });
  }
};

/**
 * DELETE SERVICE
 * DELETE /api/services/:id
 */
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    await service.deleteOne();

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Delete service error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete service",
    });
  }
};
