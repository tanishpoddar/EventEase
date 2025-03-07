const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists and follows "Bearer <TOKEN>" format
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized. Token missing." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use env variable
        req.user = decoded; // Attach decoded user data to request
        next(); // Move to the next middleware/controller
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = { authMiddleware };