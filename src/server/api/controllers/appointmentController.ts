import { Request, Response } from "express";
import { AppointmentsModel } from "../models/appointmentModel";
import { IAppointment } from "../models/interfaces";

export const getAppointments = async (req: Request, res: Response): Promise<void> => {
    try {
        const appointments: IAppointment[] = await AppointmentsModel.find();
        res.status(200).json({ success: true, data: appointments });
    } catch (error) {
        console.error("Error getting appointments:", error);
        res.status(500).json({ success: false, message: "Failed to get appointments" });
    }
};

export const getAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const appointment: IAppointment | null = await AppointmentsModel.findById(req.params.id);
        if (!appointment) {
            res.status(404).json({ success: false, message: "Appointment not found" });
            return;
        }
        res.status(200).json({ success: true, data: appointment });
    } catch (error) {
        console.error("Error getting appointment:", error);
        res.status(500).json({ success: false, message: "Failed to get appointment" });
    }
};
