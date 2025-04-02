require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Connect to MongoDB
const connectDB = require("./src/config/db");
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Import Routes
const authRoutes = require("./src/routes/authRoutes");
const storeRoutes = require("./src/routes/storeRoutes");
const ratingRoutes = require("./src/routes/ratingRoutes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/ratings", ratingRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Store Rating API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));








// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// // Connect to MongoDB (Handled in database.js)

// const connectDB = require("./src/config/db");
// connectDB();

// // Initialize App
// const app = express();
// app.use(express.json());
// app.use(cors());
 
// // Basic Route
// app.get("/", (req, res) => {
//   res.send("Store Rating API is running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


 








