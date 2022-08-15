import { Document, model, Model, Schema, InferSchemaType } from "mongoose";

const TaskSchema = new Schema({
  description: { type: String, required: true, unique: true },
  type: { type: String, required: true, enum: ["Punishment", "Lottery"] },
  done: { type: Boolean, default: false },
  teams: { type: [Schema.Types.ObjectId], ref: "Team" },
});

export type ITask = InferSchemaType<typeof TaskSchema>;

export const Task = model("Task", TaskSchema);
