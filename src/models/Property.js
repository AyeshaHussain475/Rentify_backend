import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    image: {
      type: String,
    },
    contactNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);
