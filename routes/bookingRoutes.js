const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

// Simplified route without middleware for testing
router.post("/book", function(req, res) {
  bookingController.createBooking(req, res);
});

router.get("/my-bookings", function(req, res) {
  bookingController.getUserBookings(req, res);
});

router.delete("/cancel/:bookingId", function(req, res) {
  bookingController.cancelBooking(req, res);
});

module.exports = router;