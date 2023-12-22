import { Schema, model, models, Document } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const category = models.category || model("categorySchema", categorySchema);
export default category;
