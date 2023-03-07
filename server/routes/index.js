const express = require("express");
const router = express.Router();

// different model routers
router.use('/users', require('./users'));
router.use('/recipes', require('./recipes'));

module.exports = router;
