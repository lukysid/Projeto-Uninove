import { database } from "../database.js";

export const getClients = (_, res) => {
  const q = "SELECT * FROM cliente";

  database.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
