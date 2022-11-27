import express from "express";
import dotenv from "dotenv";
// trzeba dodac .js
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

// middleware
// app.use((req,res, next) =>{
//   console.log(res.oryginalUrl);
//   next();
// })

app.get("/", (req, res) => {
  res.send("Hello from Express!, API is working");
});

app.use("/api/products", productRoutes);

// error middleware
app.use(notFound);

//error middleware
app.use(errorHandler);

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
