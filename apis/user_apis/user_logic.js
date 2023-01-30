const { create, login, getuser } = require("./user_query");
const { hash } = require("bcrypt");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");

module.exports = {
  // *****************user Registar start***************
  creatUser: async (req, res) => {
    const body = req.body;
    console.log(body);
    body.passWord = await hash(body.passWord, 8);
    create(body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          succes: "fail",
          masseg: "User Alredy Present",
        });
      } else {
        // res.status(201).json({
        //   succes: "ok",
        //   masseg: "Register Succes Full",
        // });
        res.status(201).json({
          succes: "success",
          masseg: "Registation succesFull",
        });
      }
    });
  },

  // *****************user Registar end***************
  // *****************user login start***************

  userlogin: (req, res) => {
    const body = req.body;

    login(body, (err, result) => {
      // console.log(result, "logindata");
      if (err) {
        res.status(500).json({
          status: "login fail",
          massege: err,
        });
      } else {
        const jwtoken = jwt.sign({ result: result }, process.env.JWTkEY, {
          expiresIn: "30d",
        });
        res
          .status(200)
          .cookie("jwtoken", jwtoken, {
            httpOnly: true,
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            sameSite: "none",
            secure: true,
            path: "/",
          })
          .json({ massege: "Login SuccesFull" });
      }
    });
  },
  // *****************user login end***************
  // *****************get userstart***************

  getUser: (req, res) => {
    // console.log(req.body);

    const body = req.body;

    console.log(body);

    getuser(body, (err, result) => {
      if (err) {
        res.status(402).json({
          status: "login fail",
          massege: "please login",
        });
      } else {
        const { passWord, ...otherdata } = result;
        res.status(200).json(otherdata);
      }
    });
  },
};
