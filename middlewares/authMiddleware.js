const jwt = require("jsonwebtoken");

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check if token exists and is correct
  if (token) {
    jwt.verify(token, "my sectret", (err, decodedToken) => {
      if (err) {
        res.status(400).send(err.message);
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(400).send("User unauthenticated");
  }
};
