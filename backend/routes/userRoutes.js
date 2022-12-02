import express from "express";
import {
  authUser,
  //   getUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/login", authUser);
// router.route("/:id").get(getProductById);

export default router;
