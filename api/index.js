import cors from "cors";
import express from "express";
import clientsRoutes from "./routes/clients.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/app", clientsRoutes);

app.listen(8800);
