require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Connect to MongoDB
const connectDB = require("./src/config/db");

const app = express();

// ✅ Connect to DB and Handle Connection Errors
connectDB()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Stop server if DB connection fails
  });

app.use(express.json());

// ✅ Improved CORS Configuration (Allow frontend requests)
app.use(
  cors({
    origin: "https://your-frontend-url.com", // Replace with actual frontend URL
    credentials: true,
  })
);

// Import Routes
const authRoutes = require("./src/routes/authRoutes");
const storeRoutes = require("./src/routes/storeRoutes");
const ratingRoutes = require("./src/routes/ratingRoutes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/ratings", ratingRoutes);

// ✅ Default API Test Route
app.get("/", (req, res) => {
  res.send("🚀 Store Rating API is running...");
});

// ✅ Handle Undefined Routes (Fixes "Cannot GET /api/stores")
app.use((req, res) => {
  res.status(404).json({ message: "❌ API route not found" });
});

// ✅ Start Server Only If DB is Connected
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));












// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// // Connect to MongoDB
// const connectDB = require("./src/config/db");
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Import Routes
// const authRoutes = require("./src/routes/authRoutes");
// const storeRoutes = require("./src/routes/storeRoutes");
// const ratingRoutes = require("./src/routes/ratingRoutes");

// // Use Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/stores", storeRoutes);
// app.use("/api/ratings", ratingRoutes);

// // Test Route
// app.get("/", (req, res) => {
//   res.send("Store Rating API is running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





