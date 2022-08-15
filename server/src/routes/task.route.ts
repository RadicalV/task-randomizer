import { taskController } from "@controllers";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/tasks", authMiddleware, taskController.getTasks);
router.get("/tasks/:id", authMiddleware, taskController.getTask);
router.post("/tasks", authMiddleware, taskController.createTask);
router.put("/tasks/:id", authMiddleware, taskController.updateTask);
router.delete("/tasks/:id", authMiddleware, taskController.deleteTask);

export default { router };
