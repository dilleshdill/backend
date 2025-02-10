import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Auth from "./routes/RegisterRoute.js";
import cookieParser from "cookie-parser";
import adminRoute from "./routes/adminRoute.js";
import FavoriteRoute from "./routes/favoriteRoute.js";

// Config
dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"], 
    credentials: true, 
  }));

// Routes

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", Auth);
app.use("/admin",adminRoute)
app.use("/",FavoriteRoute)
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
