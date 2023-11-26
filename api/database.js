import mysql from "mysql";

export const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "01fea528cE",
  database: "controlos",
});
