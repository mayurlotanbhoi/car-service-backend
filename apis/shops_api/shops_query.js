const pool = require("../DB_connextion/app_connection");

module.exports = {
  creat: (shopData, callback) => {
    pool.query(
      "INSERT INTO shop_details(Email,shopName,phone,shopAddress,shopStrit,PinCode,city,state) VALUE(?,?,?,?,?,?,?,?)",
      [
        shopData.Email,
        shopData.shopName,
        shopData.phone,
        shopData.shopAddress,
        shopData.Strit,
        shopData.PinCode,
        shopData.city,
        shopData.state,
      ],
      (err, result, feildes) => {
        if (err) {
          console.log(err);
          return callback("Email Id Is Alredy Registered");
        } else {
          return callback(null, result);
        }
      }
    );
  },
};
