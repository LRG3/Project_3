const router = require("express").Router();
const movieRoutes = require("./movies");
const userRoutes = require("./user")

// Movie routes
router.use("/movies", movieRoutes);
router.use("/user", userRoutes);

module.exports = router;
