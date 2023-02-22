const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

// regular middleware
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({ extended: true, parameterLimit: 50000, limit: "50mb" })
);

// cookies and file middleware
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//morgan middleware
app.use(morgan("tiny"));

// import all routes here
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const paymentRoute = require("./routes/paymentRoute");
const orderRoute = require("./routes/orderRoute");
const cartRoute = require("./routes/cartRoute");

//  router middleware
app.use("/api/v1", userRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", paymentRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", cartRoute);

// deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === "prod") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running! 🚀");
  });
}

//  middleware for getting ERROR response as JSON insted of HTML...
const jsonErrorHandler = (err, req, res, next) => {
  res.send({ status: err.status, error: err.message });
};
app.use(jsonErrorHandler);

// exporting app for index.js
module.exports = app;
