import express from "express";
import { addClient, getClients } from "../controllers/client.js";

const router = express.Router();

router.get("/clients", getClients);
router.post("/clients/addclient", addClient);

export default router;
