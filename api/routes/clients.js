import express from "express";
import { getClients } from "../controllers/client.js";

const router = express.Router();

router.get("/clients", getClients);

export default router;
