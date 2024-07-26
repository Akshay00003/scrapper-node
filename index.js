const express = require("express");
const cors = require("cors");
const mysql = require('mysql2')

const app = express();
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass0348",
  database: "imdbdata",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/", (req, res) => {
  return res.json("from backend");
});
app.get("/movies", (req, res) => {
  const sql = "select * from movies";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
