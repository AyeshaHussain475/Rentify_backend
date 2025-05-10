import express from "express";
import { addProperty } from "../controllers/property.js";

const propertyRouter = express.Router();

propertyRouter.post("/property-add", addProperty);

export default propertyRouter;
