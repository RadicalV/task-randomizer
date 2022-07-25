import { Document, model, Model, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  role: ["User", "Administrator"];
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["User", "Administrator"],
    required: true,
    default: "User",
  },
});

export const User = model<IUser>("User", UserSchema);
