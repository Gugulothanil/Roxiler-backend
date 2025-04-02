const express = require("express");
const { register, login } = require("../controllers/authController");


const router = express.Router();

// User Authentication Routes
router.post("/register", register); // Register a new user
router.post("/login", login); // Authenticate and get token

module.exports = router;







// const express = require("express");
// const { register, login } = require("../controllers/authController");
// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// module.exports = router;
