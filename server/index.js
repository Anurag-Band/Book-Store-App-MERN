const app = require("./app");
require("dotenv").config();
const ConnectWithDb = require("./config/db");
const cloudinary = require("cloudinary");
const PORT = process.env.PORT || 3440;

// To connect with Mongodb database
ConnectWithDb();

// cloudinary config goes here

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

app.listen(PORT, () => console.log(`Server is Running at PORT : ${PORT}`));

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  process.exit(1);
});

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
