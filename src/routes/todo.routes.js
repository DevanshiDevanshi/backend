import { Router } from "express";
import {
  addTodo,
  getTodos,
  deleteTodo,
  getTodosByID,
  updateTodo,
} from "../contoller/todo.controllers.js";

const router = Router();

router.post("/", addTodo);
router.get("/", getTodos);
router.get("/:id", getTodosByID);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
export default router;
