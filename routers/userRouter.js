const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

/**
 * http://locahlost:3000/register
 */
router.post("/register", userController.register);

router.post("/login", userController.login);

module.exports = router;
