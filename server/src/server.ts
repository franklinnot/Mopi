import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiRouter from "./routes/api";
import healthRouter from "./routes/health";

// Load environment variables
dotenv.config();

// Express app
const app: Express = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
const uri: string = process.env.MONGODB_URI || "";
(async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();

// Routes
app.use('/', healthRouter);
app.use('/', apiRouter);

// Server
const PORT: string | number = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
