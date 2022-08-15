import { teamController } from "@controllers";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/teams", authMiddleware, teamController.getTeams);
router.get("/teams/:id", authMiddleware, teamController.getTeam);
router.post("/teams", authMiddleware, teamController.createTeam);
router.put("/teams/:id", authMiddleware, teamController.updateTeam);
router.delete("/teams/:id", authMiddleware, teamController.deleteTeam);

export default { router };
