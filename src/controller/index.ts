import express, { Request, Response } from "express";
import Image from "../model";

export const uploadImage = async (req: Request, res: Response) => {
  try {

    // Check if image file is provided
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required." });
    }
    const imageUrl = req.file.path;

    // store cloudinary image url in mongodb
    const newImage = await Image.create({ imageURL: imageUrl });
    await newImage.save();
   
    res.status(201).json({ message: 'Image uploaded successfully.', imageUrl });

  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getImage = async (req: Request, res: Response) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      res.json({ imageUrl: image.imageURL });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
