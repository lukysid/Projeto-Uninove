import { database } from "../database.js";

export const getClients = (_, res) => {
  const q = "SELECT * FROM cliente";

  database.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addClient = (req, res) => {
  const q =
    "INSERT INTO cliente(`nome_cliente`, `cpf_cliente`, `rg_cliente`, `telefone_cliente`, `endereco_cliente`, `cep_cliente`, `email_cliente`)VALUES(?)";

  const values = [
    req.body.nome,
    req.body.cpf,
    req.body.rg,
    req.body.telefone,
    req.body.endereco,
    req.body.cep,
    req.body.email,
  ];

  database.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Cliente criado com sucesso.");
  });
};

export const deleteClient = (req, res) => {
  const q = "DELETE FROM cliente WHERE `id_cliente` = ?";

  database.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario deletado com sucesso.");
  });
};
