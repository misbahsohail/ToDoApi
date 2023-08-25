const jwt = require("jsonwebtoken");

const { jwt_token } = require("../config/config");

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check if token exists and is correct
  if (token) {
    jwt.verify(token, jwt_token, (err, decodedToken) => {
      if (err) {
        return res.status(400).send(err.message);
      }
      res.locals.userId = decodedToken.id;
      console.log(decodedToken);
      next();
    });
  } else {
    res.status(400).send("User Unauthenticated");
  }
};
