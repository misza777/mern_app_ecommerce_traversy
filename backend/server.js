import path from "path";
import express from "express";
import dotenv from "dotenv";
// trzeba dodac .js
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

//allows to accept json data in the body
app.use(express.json());

// middleware logging path and method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// __dirname - current directory
// path.join - join current directory with /uploads
// express.static - make uploads folder static
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//deployment to heroku
//static folder in production
if (process.env.NODE_ENV === "production") {
  //set static folder /frontend/dist
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  //index.html for all page except those above
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
// error middleware
app.use(notFound);

//error middleware
app.use(errorHandler);
//routes

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
