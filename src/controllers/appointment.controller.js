import { Router } from "express";
import * as AppointmentService from "../services/appointment/index.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
import addAppointmentSchema from "../helpers/schemas/addAppointment.schema.js";
const appointmentRouter = Router();
appointmentRouter.get("/", AppointmentService.getAllAppointments);
appointmentRouter.get("/:id", AppointmentService.getAppointmentById);
appointmentRouter.post("/", JoiMiddleware(addAppointmentSchema), AppointmentService.addAppointment);
appointmentRouter.delete("/:id", AppointmentService.deleteAppointment);
appointmentRouter.patch("/:id", AppointmentService.updateAppointment);
export default appointmentRouter;