import express from "express";
import {
  createBeforeAfterCase,
  getAllBeforeAfterCases,
  getSingleBeforeAfterCase,
  updateBeforeAfterCase,
  deleteBeforeAfterCase,
} from "../controllers/beforeAfterCase.controllers.js";

import { upload } from "../middlewares/multer.middlewares.js";

const router = express.Router();


router.get("/", getAllBeforeAfterCases);
router.get("/:id", getSingleBeforeAfterCase);


router.post(
  "/",
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  createBeforeAfterCase
);

router.put(
  "/:id",
  upload.fields([
    { name: "beforeImage", maxCount: 1 },
    { name: "afterImage", maxCount: 1 },
  ]),
  updateBeforeAfterCase
);

router.delete("/:id", deleteBeforeAfterCase);

export default router;
