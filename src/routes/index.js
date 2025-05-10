import express from "express";
import propertyRouter from "./property.js";

const router = express.Router();

router.use("/property", propertyRouter);

export default router;
