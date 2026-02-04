import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;
if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
} else {
  console.warn("MONGODB_URI is not set. Skipping MongoDB connection.");
}

app.get("/health", (req, res) => {
  res.json({ status: "OK", club: "Catalyst Society" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
