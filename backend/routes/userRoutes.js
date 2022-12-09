import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUserByAdmin,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
// routy z id i innymi parametrami dawaj zawsze najnizej
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
//protect is a middleware - private route

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserByAdmin);
  
export default router;
