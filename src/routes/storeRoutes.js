const express = require("express");
const { createStore } = require("../controllers/storeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new store (Protected)
router.post("/", authMiddleware, createStore);

module.exports = router;





// const express = require("express");
// const { getStores, createStore } = require("../controllers/storeController");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // Get all stores (Public)
// router.get("/", getStores);

// // Create a new store (Requires authentication)
// router.post("/", authMiddleware, createStore);

// module.exports = router;















// const express = require("express");
// const { getStores, createStore } = require("../controllers/storeController");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// router.get("/", getStores);
// router.post("/", authMiddleware, createStore);

// module.exports = router;
