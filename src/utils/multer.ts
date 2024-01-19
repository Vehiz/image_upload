import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Multer config

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const allowedFormats = ["jpg", "jpeg", "png", "gif"];

    const fileExtension = file.originalname.split(".").pop()?.toLowerCase();

    if (fileExtension && allowedFormats.includes(fileExtension)) {
      return {
        folder: "image",
        format: allowedFormats.includes(fileExtension) ? fileExtension : "jpg",
      };
    } else {
      throw new Error(
        "Invalid file format, Only jpg, jpeg, png, and gif are allowed."
      );
    }
  },
});

export const upload = multer({ storage: storage });
