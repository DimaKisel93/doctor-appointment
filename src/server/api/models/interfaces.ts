import { Document } from "mongoose";

export interface Slot {
  slotId: string;
  time: string;
  available: boolean;
}

export interface IAppointment extends Document {
  date: Date;
  slots: Slot[];
}

export interface IPatient extends Document {
  name: string;
  email: string;
  phone: string;
  appointmentDate: Date;
  slotId: string;
}