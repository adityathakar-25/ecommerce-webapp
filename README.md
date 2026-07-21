# Forever - E-Commerce Web Application

A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. It features a modern storefront for customers, a dedicated admin panel for store management, persistent cart state, order tracking, and Stripe payment integration.

## Project Architecture

- `frontend/` - Customer storefront built with React, Vite, and Tailwind CSS.
- `backend/` - Node.js and Express REST API powered by MongoDB and Cloudinary.
- `admin/` - Admin dashboard for managing products, catalog, and order fulfillment.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT Authentication, bcrypt
- **Services**: Cloudinary (Image storage), Stripe (Payment gateway)

## Features

- **Authentication**: JWT-based login and registration for users, protected admin login.
- **Product Catalog**: Categorized product browsing, category filtering, search, and sorting.
- **Cart Management**: Real-time shopping cart synced with MongoDB for authenticated users.
- **Checkout & Payments**: Support for Cash on Delivery (COD) and online payments via Stripe.
- **Order Tracking**: Order history for users and status management (Order Placed, Packing, Shipped, Delivered) for admins.
- **Admin Management**: Full CRUD operations for product inventory and order processing.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB instance (local or MongoDB Atlas)
- Cloudinary account for product image hosting
- Stripe account for handling payments

### Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adityathakar-25/ecommerce-webapp.git
   cd ecommerce-webapp
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` folder based on `.env.example`:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   CLOUDINARY_NAME=your_cloudinary_cloud_name
   JWT_SECRET=your_jwt_secret
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=your_admin_password
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PORT=4000
   ```
   Start the backend server:
   ```bash
   npm run server
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```
   Create a `.env` file in the `frontend` folder:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **Admin Panel Setup**
   ```bash
   cd ../admin
   npm install
   ```
   Create a `.env` file in the `admin` folder:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```
   Start the admin panel server:
   ```bash
   npm run dev
   ```

## License

This project is open-source under the MIT License.
