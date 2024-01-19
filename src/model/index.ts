import mongoose, { Document, Model, model, Schema } from "mongoose";

export interface IImage extends Document {
  imageURL: string;
}

const ImageSchema: Schema = new Schema({
  imageURL: { type: String, required: true },
  
},
  { timestamps: true });

const Image = mongoose.model<IImage>("Image", ImageSchema);

export default Image;
