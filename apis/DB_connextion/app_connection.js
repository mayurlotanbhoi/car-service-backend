const { createPool } = require("mysql2");

const pool = createPool({
  host: "https://car-service-api.onrender.com",
  database: "car_Service_App",
  password: "Golubhoi200@",
  user: "root",
});

module.exports = pool;
