const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Store", StoreSchema);



// const mongoose = require("mongoose");

// const StoreSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
// }, { timestamps: true }); // Adds createdAt & updatedAt fields

// module.exports = mongoose.model("Store", StoreSchema);



 


// const mongoose = require("mongoose");

// const storeSchema = new mongoose.Schema(
//   {
//     name: { 
//       type: String, 
//       required: true, 
//       trim: true 
//     },
//     address: { 
//       type: String, 
//       required: true, 
//       trim: true 
//     },
//     phone: { 
//       type: String, 
//       required: true, 
//       match: /^[0-9]{10}$/, // Ensures a valid 10-digit phone number
//       unique: true 
//     },
//     averageRating: { 
//       type: Number, 
//       default: 0, 
//       min: 0, 
//       max: 5 
//     },
//     totalRatings: { 
//       type: Number, 
//       default: 0 
//     }
//   },
//   { timestamps: true } // Adds createdAt & updatedAt fields
// );

// module.exports = mongoose.model("Store", storeSchema);










// const mongoose = require("mongoose");

// const storeSchema = new mongoose.Schema({
//   name: String,
//   address: String
// });

// module.exports = mongoose.model("Store", storeSchema);
