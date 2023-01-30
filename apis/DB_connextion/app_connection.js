const { createPool } = require("mysql2");

const pool = createPool({
  host: "sql12.freemysqlhosting.net",
  database: "sql12594367",
  port: 3306,
  password: "ngnAVJmn9p",
  user: " sql12594367",
});

module.exports = pool;
