const { creat } = require("./shops_query");

module.exports = {
  creatShope: (req, res) => {
    const body = req.body;

    creat(body, (err, result) => {
      if (err) {
        res.status(401).json({
          status: "Fail",
          massege: "Email Is Alredy Registar",
        });
      } else {
        res.status(201).json({
          status: "success",
          massege: "Shop Created",
        });
      }
    });
  },
};
