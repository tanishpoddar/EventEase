// controllers/ticketController.js
const { Ticket, Event, User } = require("../models");

// Book a ticket for an event
exports.bookTicket = async (req, res) => {
    try {
        const { eventId, userId, quantity, ticketType } = req.body;

        // Validate input
        if (!eventId || !userId || !quantity) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Check if event exists
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        // Check if user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create ticket
        const ticket = await Ticket.create({
            eventId,
            userId,
            quantity,
            ticketType: ticketType || 'general',
            status: 'confirmed',
            purchaseDate: new Date()
        });

        res.status(201).json({
            message: "Ticket booked successfully",
            ticket
        });
    } catch (error) {
        console.error("Error booking ticket:", error);
        res.status(500).json({ message: "Failed to book ticket", error: error.message });
    }
};

// Get all tickets for a user
exports.getUserTickets = async (req, res) => {
    try {
        const { user_id } = req.params;

        // Find all tickets for the user
        const tickets = await Ticket.findAll({
            where: { userId: user_id },
            include: [{ model: Event }]
        });

        if (!tickets.length) {
            return res.status(404).json({ message: "No tickets found for this user" });
        }

        res.status(200).json(tickets);
    } catch (error) {
        console.error("Error fetching user tickets:", error);
        res.status(500).json({ message: "Failed to fetch tickets", error: error.message });
    }
};