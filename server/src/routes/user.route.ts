import { userController } from "@controllers";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/users/me", authMiddleware, userController.getCurrentUserData);
router.get("/users", authMiddleware, userController.getUsers);
router.put("/users/:id", authMiddleware, userController.updateUser);
router.delete("/users/:id", authMiddleware, userController.deleteUser);

export default { router };
