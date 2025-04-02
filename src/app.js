const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/authRoutes");
const storeRoutes = require("./routes/storeRoutes");
const ratingRoutes = require("./routes/ratingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/ratings", ratingRoutes);
 
module.exports = app; // Export for server.js & testing







// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

// module.exports = app;
