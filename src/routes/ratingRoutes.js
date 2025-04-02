const express = require("express");
const { createRating, getRatingsByStore } = require("../controllers/ratingController"); // ✅ Import `getRatingsByStore`
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createRating);
router.get("/:storeId", getRatingsByStore); // ✅ Correctly referenced function

module.exports = router;



// const express = require("express");
// const { submitRating } = require("../controllers/ratingController");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // Rating submission (Requires authentication)
// router.post("/submit", authMiddleware, submitRating);

// module.exports = router;












// const express = require("express");
// const { submitRating } = require("../controllers/ratingController");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// router.post("/submit", authMiddleware, submitRating);

// module.exports = router;
