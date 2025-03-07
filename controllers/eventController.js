const { Event, Venue } = require("../models");

// Create an Event
const createEvent = async (req, res) => {
  try {
    const { name, description, date, time, venue_id } = req.body;

    // Ensure the venue exists
    const venue = await Venue.findByPk(venue_id);
    if (!venue) return res.status(404).json({ message: "Venue not found" });

    // Create the event
    const event = await Event.create({
      name, description, date, time, venue_id
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Events with Venue Details
const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [{ model: Venue, as: 'venue' }] // Include Venue details
    });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Event by ID with Venue Details
const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [{ model: Venue, as: 'venue' }] // Include Venue details
    });
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an Event
const updateEvent = async (req, res) => {
  try {
    const { name, description, date, time, venue_id } = req.body;

    // Ensure the venue exists
    const venue = await Venue.findByPk(venue_id);
    if (!venue) return res.status(404).json({ message: "Venue not found" });

    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Update the event
    await event.update({ name, description, date, time, venue_id });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an Event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    await event.destroy();
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEvent, getEvents, getEventById, updateEvent, deleteEvent };
