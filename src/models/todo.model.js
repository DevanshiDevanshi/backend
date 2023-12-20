import mongoose from "mongoose";

export const TodoSchema = new mongoose.Schema({
  id: String,
  task: String,
  status: String,
});

export const Todo = mongoose.model("Todo", TodoSchema);
