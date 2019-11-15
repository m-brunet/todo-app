const express = require('express');
const router = express.Router();
const controllers = require('./users.controllers');

router.route("/users")
    .get(controllers.getManyUsers)
    .post(controllers.createOneUser);

module.exports = router;
