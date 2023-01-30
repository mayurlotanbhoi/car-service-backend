const { createPool } = require("mysql2");

const pool = createPool({
  host: "localhost",
  database: "car_Service_App",
  port: 3306,
  password: "Golubhoi200@",
  user: "root",
});

module.exports = pool;
