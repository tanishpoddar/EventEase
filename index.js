require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

// Database connection
const sequelize = new Sequelize("event_booking_db", "root", "your_mysql_password", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const app = express();
app.use(cors());
app.use(express.json());

// Test DB connection
sequelize.authenticate()
  .then(() => console.log("✅ Database connected successfully"))
  .catch(err => console.error("❌ Database connection error:", err));

app.get("/", (req, res) => {
  res.send("Event Booking API is Running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
