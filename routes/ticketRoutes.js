// routes/ticketRoutes.js
const express = require('express');
const router = express.Router();
const { bookTicket, getUserTickets } = require('../controllers/ticketController');

// Route to book a ticket
router.post('/book', bookTicket);

// Route to get all tickets for a user
router.get('/user/:user_id', getUserTickets);

module.exports = router;
