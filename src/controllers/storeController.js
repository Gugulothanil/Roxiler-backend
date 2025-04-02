const Store = require("../models/Store");

// ✅ Create a new store
const createStore = async (req, res) => {
  try {
    const { name, location } = req.body;

    if (!name || !location) {
      return res.status(400).json({ message: "Name and location are required" });
    }

    // 🔹 Check if store already exists
    const existingStore = await Store.findOne({ name: name.trim() });
    if (existingStore) {
      return res.status(400).json({ message: "Store already exists" });
    }

    const newStore = new Store({ name: name.trim(), location });
    await newStore.save();

    res.status(201).json({
      message: "Store created successfully",
      store: newStore,
    });
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get all stores
const getStores = async (req, res) => {
  try {
    const stores = await Store.find(); // Fetch all stores from the database
    res.status(200).json(stores);
  } catch (error) {
    console.error("Error fetching stores:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createStore, getStores };




// const Store = require("../models/Store");

// // Get all stores
// exports.getStores = async (req, res) => {
//   try {
//     const stores = await Store.find();
//     res.json(stores);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Create a new store
// exports.createStore = async (req, res) => {
//   try {
//     const { name, location, category } = req.body;

//     const store = new Store({ name, location, category });
//     await store.save();

//     res.status(201).json({ message: "Store created successfully", store });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get a specific store by ID
// exports.getStoreById = async (req, res) => {
//   try {
//     const store = await Store.findById(req.params.id);
//     if (!store) return res.status(404).json({ message: "Store not found" });

//     res.json(store);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
