import { Router } from "express";
import todoRoutes from "./todo.routes.js";
const router = Router();

router.use("/todos", todoRoutes);

router.use("/", function (req, res) {
  res.send("Hello world");
});

export default router;
