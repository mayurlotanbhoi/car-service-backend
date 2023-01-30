const rout = require("express").Router();
const { creatShope } = require("./shops_logic");

rout.post("/addShop", creatShope);

module.exports = rout;
