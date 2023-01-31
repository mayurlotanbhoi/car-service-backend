const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.json());

app.use(
  cors({
    origin: ["https://car-service-foi1.onrender.com", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    exposedHeaders: ["*", "Authorization"],
  })
);

const cretUser = require("./apis/user_apis/user_router");
const userlogin = require("./apis/user_apis/user_router");
const getUser = require("./apis/user_apis/user_router");
const creatShope = require("./apis/shops_api/shops_routers");
const jwtvarification = require("./apis/jwtVarification");

// console.log(cretUser);

app.use("/user", cretUser);
app.use("/user", userlogin);
app.use("/user", creatShope);
app.use("/", jwtvarification, getUser);

app.listen(PORT, (err) => {
  console.log(`app listening on port ${PORT}`);
});
