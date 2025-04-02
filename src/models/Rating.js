const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Rating", RatingSchema);


// const mongoose = require("mongoose");

// const RatingSchema = new mongoose.Schema({
//   store: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   rating: { type: Number, required: true, min: 1, max: 5 },
//   review: { type: String, required: true },
// });

// module.exports = mongoose.model("Rating", RatingSchema);





// const mongoose = require("mongoose");

// const ratingSchema = new mongoose.Schema(
//   {
//     userId: { 
//       type: mongoose.Schema.Types.ObjectId, 
//       ref: "User", 
//       required: true 
//     },
//     storeId: { 
//       type: mongoose.Schema.Types.ObjectId, 
//       ref: "Store", 
//       required: true 
//     },
//     rating: { 
//       type: Number, 
//       required: true, 
//       min: 1, 
//       max: 5 
//     },
//     review: { 
//       type: String, 
//       trim: true 
//     }
//   },
//   { timestamps: true } // Adds createdAt & updatedAt fields
// );

// module.exports = mongoose.model("Rating", ratingSchema);










// const mongoose = require("mongoose");

// const ratingSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
//   rating: Number
// });

// module.exports = mongoose.model("Rating", ratingSchema);
