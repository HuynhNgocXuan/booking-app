import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDatabase from "./utils/connectToDatabase.js";

const app = express();

connectToDatabase();

// parse incoming JSON req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// allow req from another port
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
