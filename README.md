# Event Ticket Booking System

The **Event Ticket Booking System** is a database-driven platform designed to simplify the process of ticket reservations for concerts, sports matches, theater performances, and seminars. It provides users with an intuitive interface to browse events, select seats, and book tickets efficiently. Event organizers can manage events, track bookings, and oversee ticket availability through an administrative dashboard.

## Features
- User authentication (registration, login, JWT-based authorization)
- Event management (CRUD operations)
- Venue management
- Ticket booking system
- Admin dashboard for managing users and events
- Secure API with authentication middleware

---

## 🛠️ Setup Instructions
### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (>= 14.x recommended)
- **MySQL** (for database management)
- **Postman or any API testing tool** (optional for testing API requests)

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-username/event-ticket-booking.git
 cd event-ticket-booking
```

### 2️⃣ Install Dependencies
```sh
 npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=event_booking
JWT_SECRET=your_secret_key
```

### 4️⃣ Set Up the Database
#### Create MySQL Database:
```sql
CREATE DATABASE event_booking;
```

#### Run Migrations to Generate Tables:
```sh
npx sequelize db:migrate
```

### 5️⃣ Start the Server
```sh
 npm run dev   # For development (using nodemon)
 npm start     # For production
 node server.js
```
The server will start on **http://localhost:5000**

---

## 📌 API Endpoints
### **Authentication**
| Method | Endpoint           | Description        |
|--------|-------------------|--------------------|
| POST   | `/users/register` | Register a user   |
| POST   | `/users/login`    | Login a user      |

### **Events Management** (Requires Authentication)
| Method | Endpoint       | Description        |
|--------|---------------|--------------------|
| GET    | `/events`     | Get all events    |
| POST   | `/events`     | Create an event   |
| GET    | `/events/:id` | Get event details |
| PUT    | `/events/:id` | Update event      |
| DELETE | `/events/:id` | Delete event      |

### **Ticket Booking**
| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| POST   | `/bookings`    | Book a ticket      |
| GET    | `/bookings`    | View user bookings |

---

## 🔒 Authentication Middleware
All protected routes require a **JWT token**. Add the following in headers:
```
Authorization: Bearer <your_token>
```

---

## 🛠️ Technologies Used
- **Node.js & Express.js** (Backend API)
- **MySQL & Sequelize** (Database & ORM)
- **JWT (JSON Web Tokens)** (Authentication)

---

## 🚀 Future Improvements
- Implement seat selection
- Add payment gateway integration
- Develop a frontend UI

---

## 💡 Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`feature-new`)
3. Commit your changes
4. Push to your branch and submit a PR

---

## 📜 License
This project is licensed under the GNU License.

---

## ✉️ Contact
For any issues or suggestions, feel free to open an issue or reach out.

