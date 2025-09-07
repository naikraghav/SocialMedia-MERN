import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});



