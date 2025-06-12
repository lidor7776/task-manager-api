import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

//יצירת משימה חדשה POST
router.post("/tasks", authMiddleware, createTask);

// שליפת כל המשימות של המשתמש (GET)
router.get("/tasks", authMiddleware, getTasks);

// עדכון משימה לפי ID (PUT)
router.put("/tasks/:id", authMiddleware, updateTask);

// מחיקת משימה לפי ID (DELETE)
router.delete("/tasks/:id", authMiddleware, deleteTask);

export default router;
