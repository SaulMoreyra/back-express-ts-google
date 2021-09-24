import { Router } from "express";
import controller from "../controllers";

const router = Router();

router.get("/places", controller.places);
router.get("/places/:placeId", controller.place);

export default router;
