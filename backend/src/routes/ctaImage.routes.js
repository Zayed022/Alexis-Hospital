import express from "express";
import {upload} from "../middlewares/multer.middlewares.js";
import {
  uploadCtaImage,
  getActiveCtaImage,
  deleteCtaImage,
} from "../controllers/ctaImage.controllers.js";

const router = express.Router();

router.post(
    "/",
    upload.single("image"),
    uploadCtaImage
  );
  

router.get("/", getActiveCtaImage);

router.delete("/:id", deleteCtaImage);

export default router;
