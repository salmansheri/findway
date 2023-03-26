import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from './routes/user.routes.js'; 
import department from "./routes/department.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const connectionUrl = process.env.MONGO_URI;
const port = process.env.PORT;

mongoose.set("strictQuery", true);

mongoose
  .connect(connectionUrl)
  .then(() => console.log("Database Connection Established Successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.json({message: "hello world!"})
})

app.use("/api/v1/users", User); 
app.use("/api/v1/department", department); 



app.listen(port, () => console.log(`Server listening at port http://localhost:${port}`));
