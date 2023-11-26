import express from "express";
import {
  addClient,
  deleteClient,
  getClient,
  getClients,
} from "../controllers/client.js";

const router = express.Router();

router.get("/clients", getClients);
router.get("/clients/addclient/:id", getClient);
router.post("/clients/addclient", addClient);
router.delete("/clients/:id", deleteClient);

export default router;
