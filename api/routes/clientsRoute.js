import express from "express";

const Router = express.Router();

Router.get("/clients", getClients);
Router.get("/clients/:id", getClient);
Router.post("/clients/addclient", postClient);

export default Router;
