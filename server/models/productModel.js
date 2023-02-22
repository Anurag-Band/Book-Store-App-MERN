const mongoose = require("mongoose");

// name
// price
// description
// images
// category
// author
// publisher
// bookType
// language
// noOfPages
// stock

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a product name"],
      trim: true,
      maxlength: [120, "product name should not be more than 120 charecters"],
    },
    price: {
      type: Number,
      required: [true, "please provide a product price"],
      maxlength: [6, "product price should not be more than 6 digits"],
    },
    description: {
      type: String,
      required: [true, "please provide product description"],
    },
    photos: [
      {
        public_id: {
          type: String,
          required: true,
        },
        secure_url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "please enter product category"],
    },
    author: {
      type: String,
      required: [true, "please provide a author for book"],
    },
    publisher: {
      type: String,
      required: [true, "please provide a author for book"],
    },
    bookType: {
      type: String,
      required: [true, "please enter book type"],
    },
    language: {
      type: String,
      required: [true, "please enter book language"],
    },
    noOfPages: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: [true, "please add a number in stock"],
      maxLength: [4, "stock cannnot exceed 4 characters"],
      default: 0,
    },

    // above fields are required ⤴️⤴️
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
