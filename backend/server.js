import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
// trzeba dodac .js
import connectDB from "./config/db.js";
import colors from "colors";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!, API is working");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  res.json(products.find((p) => p._id === req.params.id));
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`.yellow
      .bold
  )
);

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
//     next();
//     }
