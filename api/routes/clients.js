import express from "express";
import { addClient, deleteClient, getClients } from "../controllers/client.js";

const router = express.Router();

router.get("/clients", getClients);
router.post("/clients/addclient", addClient);
router.delete("/clients", deleteClient);

export default router;
