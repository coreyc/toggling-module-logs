const express = require('express');
const router = express.Router();

const {logger, errorLogger} = require('../debuggers');

/* GET home page. */
router.get('/', (req, res, next) => {
  logger(`${req.method} ${req.url}index`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
