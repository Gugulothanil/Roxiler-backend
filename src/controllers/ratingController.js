const mongoose = require("mongoose");
const Rating = require("../models/Rating");
const Store = require("../models/Store");

const getRatingsByStore = async (req, res) => {
  try {
    const { storeId } = req.params;

    // 🔹 Validate Store ID format
    if (!mongoose.Types.ObjectId.isValid(storeId)) {
      return res.status(400).json({ message: `Invalid Store ID format: ${storeId}` });
    }

    // 🔹 Fetch ratings for the store
    const ratings = await Rating.find({ storeId });

    if (ratings.length === 0) {
      return res.status(404).json({ message: "No ratings found for this store" });
    }

    res.status(200).json({ ratings });
  } catch (error) {
    console.error("❌ Error fetching ratings:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createRating = async (req, res) => {
  try {
    const { storeId, rating, review } = req.body;

    // 🔹 Validate required fields
    if (!storeId || !rating || !review) {
      return res.status(400).json({ message: "Store ID, rating, and review are required" });
    }

    // 🔹 Validate `storeId` format
    if (!mongoose.Types.ObjectId.isValid(storeId)) {
      console.error(`❌ Invalid Store ID format: ${storeId}`);
      return res.status(400).json({ message: `Invalid Store ID format: ${storeId}` });
    }

    // 🔹 Check if store exists in MongoDB
    const store = await Store.findById(storeId);
    if (!store) {
      console.error(`❌ Store not found with ID: ${storeId}`);
      return res.status(404).json({ message: `Store not found with ID: ${storeId}` });
    }

    // 🔹 Ensure user is authenticated
    if (!req.user || !req.user.id) {
      console.error("❌ Unauthorized: Missing user authentication");
      return res.status(401).json({ message: "Unauthorized: Missing user authentication" });
    }

    // 🔹 Create new rating
    const newRating = new Rating({
      storeId: store._id, // Ensure it's an ObjectId
      rating,
      review,
      userId: req.user.id, // Link rating to user
    });

    await newRating.save();

    console.log("✅ Rating added successfully:", newRating);
    res.status(201).json({
      message: "Rating added successfully",
      rating: newRating,
    });
  } catch (error) {
    console.error("❌ Error adding rating:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createRating, getRatingsByStore }; // ✅ Ensure function is exported
