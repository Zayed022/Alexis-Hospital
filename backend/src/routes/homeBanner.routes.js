import express from "express";
import {
  createHomeBanner,
  getActiveHomeBanners,
  getAllHomeBanners,
  updateHomeBanner,
  deleteHomeBanner,
} from "../controllers/homeBanner.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";


const router = express.Router();

router.get("/", getActiveHomeBanners);

router.get("/admin", getAllHomeBanners);
router.post("/", 
    upload.fields([
    { name: "bannerImage", maxCount: 1 },
  ]),
    createHomeBanner);
router.put(
  "/:id",
  upload.fields([{ name: "bannerImage", maxCount: 1 }]),
  updateHomeBanner
);

router.delete("/:id", deleteHomeBanner);

export default router;
