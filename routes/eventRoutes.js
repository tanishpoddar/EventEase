const express = require("express");
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require("../controllers/eventController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, createEvent); // Create event (Protected)
router.put("/:id", authMiddleware, updateEvent); // Update event (Protected)
router.delete("/:id", authMiddleware, deleteEvent); // Delete event (Protected)

// Public routes
router.get("/", getEvents); // Get all events (Public)
router.get("/:id", getEventById); // Get event by ID (Public)

module.exports = router;

