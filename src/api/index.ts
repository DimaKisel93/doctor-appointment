import express, { Application, Request, Response } from "express";
import appointmentRoutes from "./routes/appointmentRoutes";
import mongoose, { Error } from "mongoose";
import { config } from 'dotenv';

config()

const app: Application = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "").then(() => {
    console.log("Connected to MongoDB");
}).catch((error: Error) => {
    console.error("MongoDB connection error:", error);
}); 

app.use("/appointments", appointmentRoutes);

app.use((req: Request, res: Response) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err: Error, req: Request, res: Response) => {
    console.error("Server error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
});

export default app;





