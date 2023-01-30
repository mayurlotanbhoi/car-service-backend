const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());

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
