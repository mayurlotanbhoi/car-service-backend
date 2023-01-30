const pool = require("../DB_connextion/app_connection");
const { compare } = require("bcrypt");

module.exports = {
  // *****************user Registar start***************
  create: (data, callback) => {
    pool.query(
      "insert into user_info( Email  , passWord, Address , Strit , PinCode , city ,state) value(?,?,?,?,?,?,?)",
      [
        data.Email,
        data.passWord,
        data.Address,
        data.Strit,
        data.PinCode,
        data.city,
        data.state,
      ],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return callback(err);
        } else {
          // console.log(field);
          return callback(null, result);
        }
      }
    );
  },

  // *****************user Registar end***************
  // *****************user login start***************

  login: (data, callback) => {
    // console.log(data.Email);
    // console.log(data.passWord);

    pool.query(
      "select * from user_info where Email = ?",
      [data.Email],
      async (err, result, fields) => {
        // console.log(result);
        if (err) {
          return callback("Somthing is Wrong");
        }
        if (result.length === 0) {
          return callback("Email not found");
        }
        if (data.Email != result[0].Email) {
          return callback("Invalid email or password");
        }
        const isPasswotdMAtch = await compare(
          data.passWord,
          result[0].passWord
        );

        if (!isPasswotdMAtch) {
          return callback("Invalid email or password");
        }

        const { passWord, ...otheallData } = result[0];

        console.log(otheallData, "other");
        return callback(null, otheallData);
      }
    );
  },
  // *****************user login end***************
  // ***************** get user start***************

  getuser: (data, callback) => {
    console.log(data, "get user");

    pool.query(
      "SELECT * FROM user_info INNER JOIN shop_details where user_info.Email = ?",

      [data.Email],
      (err, result) => {
        if (err) {
          return callback("sothing is wrong");
        } else {
          callback(null, result);
        }
      }
    );
  },
};
