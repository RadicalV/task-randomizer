import { teamController } from "@controllers";
import { Router } from "express";

const router = Router();

router.get("/teams", teamController.getTeams);
router.post("/teams", teamController.createTeam);
router.put("/teams/:id", teamController.updateTeam);
router.delete("/teams/:id", teamController.deleteTeam);

export default { router };
