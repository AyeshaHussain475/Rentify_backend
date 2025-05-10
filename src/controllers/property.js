import Property from "../models/Property.js";

export const addProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      city,
      price,
      type,
      address,
      image,
      contactNumber,
    } = req.body;

    const existingProperty = await Property.findOne({ title });
    if (existingProperty) {
      return res.status(400).json({
        message: "Property already exists!",
      });
    }
    const newProperty = new Property({
      title,
      description,
      city,
      price,
      type,
      address,
      image,
      contactNumber,
    });

    await newProperty.save();
    return res.status(201).json({
      message: "Property added successfully!",
      property: newProperty,
    });
  } catch (error) {
    console.log("Error while saving property", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
