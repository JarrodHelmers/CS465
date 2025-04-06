const express = require("express");
const router = express.Router();

//Import controllers
const tripsController = require("../controllers/trips");

//Defines router for trips endpoint
router.route("/trips").get(tripsController.tripsList);

//Get method routes TripsFindByCode
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode);

module.exports = router;