import { Router } from "express";
import {
  getAppointments,
  getAppointment,
} from "../controllers/appointmentController";

const router: Router = Router();

router.get("/", getAppointments); 
router.get("/:id", getAppointment); 

export default router;