const rout = require("express").Router();
const { creatUser, userlogin, getUser } = require("./user_logic");

rout.post("/registation", creatUser);
rout.post("/login", userlogin);
rout.get("/user", getUser);

module.exports = rout;
