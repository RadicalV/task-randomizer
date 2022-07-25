import { Document, model, Model, Schema, InferSchemaType } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["User", "Administrator"],
    required: true,
    default: "User",
  },
});

export type IUser = InferSchemaType<typeof UserSchema>;

export const User = model("User", UserSchema);
