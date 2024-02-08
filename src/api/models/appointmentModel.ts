import { Schema, model } from "mongoose";
import { IAppointment, IPatient, Slot } from "./interfaces";

const SlotSchema = new Schema<Slot>({
  slotId: { type: String, required: true },
  time: { type: String, required: true },
  available: { type: Boolean, required: true }
});

const AppointmentsSchema = new Schema<IAppointment>({
  date: { type: Date, required: true },
  slots: [SlotSchema]
});

export const AppointmentsModel = model<IAppointment>('appointments', AppointmentsSchema);

const PatientsSchema: Schema = new Schema<IPatient>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  slotId: { type: String, required: true },
});

export const PatientsModel = model<IPatient>("patients", PatientsSchema);
