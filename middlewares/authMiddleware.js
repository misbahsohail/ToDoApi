const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || "development";
const configPath = `${__dirname}/../config/config.json`;
const config = require(configPath)[env];

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check if token exists and is correct
  if (token) {
    jwt.verify(token, config.jwt_token, (err, decodedToken) => {
      if (err) {
        res.status(400).send(err.message);
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(400).send("User Unauthenticated");
  }
};
