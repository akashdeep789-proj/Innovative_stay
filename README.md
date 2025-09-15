# Innovative_stay

# 🏠 Innovative Stay

**Innovative Stay** is a full-stack property rental platform designed to simplify short-term and long-term stays for hosts and guests. It provides features for property listings, bookings, real-time chat, secure payments, and review management, all presented in a modern, user-friendly interface.

---

## Project Contributors - Akashdeep Kumar

##  Features

### Guest Features
- 🔍 Browse and search properties by city or country
- 📆 Check availability and make bookings
- 💬 Real-time chat with property owners
- 📄 View booking history and past reviews
- ⭐ Leave reviews for properties

###  Host Features
- 🏘️ Add, edit, and manage property listings
- 📸 Upload and store property images using Cloudinary
- 💬 Communicate with guests via chat
- 📈 Track bookings and earnings
- ⭐ View reviews left by guests

### Admin Features
- 🧑‍💼 Manage all users (hosts & guests)
- 📦 Monitor property listings
- 💬 Review user interactions
- ⛔ Block or unblock user accounts
- 📊 Access platform-wide metrics

---

##  Project Highlights

- 🔐 **Authentication**: Role-based login for Admin, Host, and Guest using Passport.js with session management.
- 💬 **Real-time Communication**: Messaging system between hosts and guests powered by Socket.IO.
- 🖼️ **Cloudinary Integration**: Store property images and user avatars securely, URLs saved in MongoDB.
- 💬 **MVC Structure**: Implements the Model-View-Controller (MVC) pattern with models for data, views for EJS templates, and controllers/routes for application logic.

- 💬 **Mapbox Integration**: Uses Mapbox API to display property locations interactively on maps with markers for better UX.
- 📅 **Booking Flow**: Full booking system with date validation, availability checks, and conflict prevention.
- ⭐ **Reviews & Ratings**: Guests can leave reviews for properties, displayed dynamically.
- 📁 **Database**: MongoDB backend using Mongoose with normalized schemas for users, properties, bookings, and reviews.
- 🛡️ **Security**: Helmet.js Content Security Policy and session-based authentication with MongoStore.

---

##  Tech Stack

### 🔹 Frontend
- EJS Templates
- Bootstrap 5
- Vanilla JS for client-side interactions
- Socket.IO client for real-time chat
- CSS Grid & Flexbox for layouts

### 🔹 Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js for authentication
- Connect-Mongo for session storage
- Socket.IO for real-time communication
- Cloudinary SDK for image uploads
- Express-Session & Flash for sessions and notifications
- Helmet.js for security
- Mapbox

---

##  Workflow

1. **User Authentication**: Guests, Hosts, and Admins can register and log in with role-based access.
2. **Property Management**: Hosts can add or edit properties, upload images, and manage availability.
3. **Booking Process**: Guests select dates and properties, system checks availability, confirms booking.
4. **Real-time Chat**: Guests and Hosts can communicate via live chat powered by Socket.IO.
5. **Reviews & Ratings**: Guests can leave reviews after a booking, visible to all users.
6. **Admin Controls**: Admin can manage users, block/unblock accounts, and monitor overall platform activity.

---

##  Setup Instructions

### 📁 Clone the Repository
```bash
git clone https://github.com/yourusername/innovative_stay.git
cd innovative_stay


ATLASDB_URL=<Your MongoDB Atlas Connection String>
SECRET=<Your Session Secret>
CLOUDINARY_CLOUD_NAME=<Cloudinary Cloud Name>
CLOUDINARY_API_KEY=<Cloudinary API Key>
CLOUDINARY_API_SECRET=<Cloudinary API Secret>
MAP_TOKEN=<Token>


Future Enhancements:

Stripe payment integration for secure booking payments
Advanced search and filtering
Multi-language support
Admin dashboard with analytics
