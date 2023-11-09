import express from "express";
import "dotenv/config";
import dbConnect from "./db/dbConnect.js";
import authRoute from "./routes/authRoute.js";

const port = process.env.PORT || 5000;
dbConnect();
const app = express();

app.use(express.json());
app.use("/auth", authRoute);

app.listen(port, console.log(`Listening to port ${port}`));
