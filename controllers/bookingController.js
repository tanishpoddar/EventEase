const { Booking, User, Event } = require("../models");

exports.createBooking = async (req, res) => {
    try {
        const { eventId, tickets } = req.body;
        const userId = req.user.userId; // Extracted from authMiddleware

        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        const booking = await Booking.create({ userId, eventId, tickets, status: "confirmed" });

        res.status(201).json({ message: "Booking successful", booking });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserBookings = async (req, res) => {
    try {
        const userId = req.user.userId;
        const bookings = await Booking.findAll({
            where: { userId },
            include: [{ model: Event }]
        });

        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const userId = req.user.userId;

        const booking = await Booking.findOne({ where: { id: bookingId, userId } });
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        await booking.update({ status: "canceled" });

        res.json({ message: "Booking canceled successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
