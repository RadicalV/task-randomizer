import { Document, model, Model, Schema, InferSchemaType } from "mongoose";

const TeamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  color: { type: String, required: true, unique: true },
  users: { type: [Schema.Types.ObjectId], ref: "User" },
});

export type ITeam = InferSchemaType<typeof TeamSchema>;

export const Team = model("Team", TeamSchema);
