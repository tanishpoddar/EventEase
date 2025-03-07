require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models"); // Sequelize models

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Event Booking API is running!");
});

// ✅ Import Routes
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const ticketRoutes = require("./routes/ticketRoutes");  // Import the ticket routes

// ✅ Use Routes
app.use("/users", userRoutes);
app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);
app.use("/tickets", ticketRoutes);  // Use the ticket routes

// Sync Database (Optional)
// Ensure the database is synced before starting the server
db.sequelize.sync()
  .then(() => console.log("Database synced!"))
  .catch((err) => console.error("Database sync failed:", err));

// Set port for the application
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
