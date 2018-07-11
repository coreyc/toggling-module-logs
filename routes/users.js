const express = require('express');
const router = express.Router();

const {logger, errorLogger} = require('../debuggers');

/* GET users listing. */
router.get('/', (req, res, next) => {
  logger(`${req.method} ${req.url}users`);
  res.send('respond with a resource');
});

module.exports = router;
