const express = require('express');
const router = express.Router();
const controllers = require('./products.controllers');

//array productNames
router.route("/listings")
    .get(controllers.getProductNames);

//int -> total buy price of all products
router.route("/listings/total")
    .get(controllers.getTotalPrice);

module.exports = router;
