const jwt = require('jsonwebtoken');
const config = require('../../config');

const authenticateJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();
    const payload = jwt.verify(token, config.authJwtSecret);
    console.log(payload);
  } catch (error) {
    next(error);
  }
};

module.exports = authenticateJwt;
