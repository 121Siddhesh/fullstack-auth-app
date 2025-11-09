# Food Delivery Application

A full-stack food delivery application built with React and Node.js, featuring user authentication, restaurant browsing, menu management, and order tracking.

## Features

- User authentication (register/login) with JWT
- Browse restaurants by cuisine type
- View restaurant details and menus
- Add items to cart
- Place and track orders
- Order history for users
- Protected routes for authenticated users

## Tech Stack

### Frontend
- React 18
- React Router DOM for navigation
- Axios for API calls
- Vite for build tooling
- React Icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

## Project Structure

```
food-delivery/
├── Backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Authentication middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point
└── frontend/
    ├── public/          # Static files
    ├── src/
    │   ├── components/  # React components
    │   ├── context/     # Context providers
    │   ├── pages/       # Page components
    │   └── services/    # API services
    └── vite.config.js   # Vite configuration
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```
MONGO_URI=mongodb://localhost:27017/food-delivery
JWT_SECRET=your_secret_key
PORT=5000
```

5. Start the server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant by ID
- `GET /api/restaurants/seed` - Seed sample restaurant data

### Orders
- `POST /api/orders` - Create a new order (protected)
- `GET /api/orders` - Get user orders (protected)

## Usage

1. Start MongoDB service
2. Run the backend server
3. Run the frontend development server
4. Visit `http://localhost:5173` in your browser
5. Register a new account or login
6. Browse restaurants and place orders

## Seeding Data

To populate the database with sample restaurants, make a GET request to:
```
http://localhost:5000/api/restaurants/seed
```

## Environment Variables

### Backend
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 5000)

## License

This project is open source and available under the MIT License.
