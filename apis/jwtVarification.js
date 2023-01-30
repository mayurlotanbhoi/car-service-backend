const jwt = require("jsonwebtoken");

function jwtvarification(req, res, next) {
  const useJWT = req.cookies.jwtoken;

  // console.log(useJWT);

  if (!useJWT) {
    res.status(402).json({
      status: "login fail",
      massege: "token fail",
    });
    return;
  }
  // console.log(process.env.JWTkEY);

  const isMatch = jwt.verify(useJWT, process.env.JWTkEY);

  console.log(isMatch, "ismatch");

  if (!isMatch) {
    res.status(402).json({
      status: "login fail",
      massege: "please login",
    });
    return;
  } else {
    req.body.Email = isMatch.email;
    // console.log(req.body, "body");
    next();
  }
}

module.exports = jwtvarification;
