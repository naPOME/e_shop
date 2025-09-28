# E-Shop Application

A full-stack e-commerce application built with Laravel (Backend) and Next.js (Frontend).

> **Note**: This repository contains both the frontend and backend code in separate directories.

## Table of Contents

- [E-Shop Application](#e-shop-application)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Tech Stack](#tech-stack)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Prerequisites](#prerequisites)
  - [Project Structure](#project-structure)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
    - [Development Mode](#development-mode)
    - [Alternative: Using Concurrent Scripts](#alternative-using-concurrent-scripts)
  - [API Endpoints](#api-endpoints)
    - [Products](#products)
    - [Categories](#categories)
  - [Database Schema](#database-schema)
    - [Products Table](#products-table)
    - [Categories Table](#categories-table)
  - [Admin Credentials](#admin-credentials)
    - [Useful Commands](#useful-commands)
  - [License](#license)

## Project Overview

This is a full-featured e-commerce application with product management capabilities. The application includes:

- Product CRUD operations
- Category management
- Admin dashboard with statistics
- Responsive UI with Tailwind CSS
- RESTful API implementation

## Tech Stack

### Backend
- Laravel 12.x
- PHP 8.2+
- MySQL database
- RESTful API

### Frontend
- Next.js 15.x
- React 19.x
- TypeScript
- Tailwind CSS
- SWR for data fetching
- Axios for HTTP requests

## Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js 18+ or higher
- npm or yarn

## Project Structure

```
e-shop/
├── backend/          # Laravel backend application
│   ├── app/           # Application code
│   ├── database/      # Database migrations
│   ├── routes/        # API routes
│   └── ...
└── frontend/         # Next.js frontend application
    ├── src/           # Source code
    ├── app/           # Pages and layouts
    ├── components/    # React components
    └── ...
```

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Copy the environment file and generate application key:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. Configure your database in `.env` (MySQL is configured by default):
   ```bash
   # For MySQL (default)
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

5. Run database migrations:
   ```bash
   php artisan migrate
   ```

6. (Optional) Seed the database with sample data:
   ```bash
   php artisan db:seed
   ```

7. Start the backend server:
   ```bash
   php artisan serve
   ```

   The backend API will be available at `http://localhost:8000`

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with the backend URL:
   ```bash
   echo "NEXT_PUBLIC_API_URL=http://localhost:8000/api" > .env.local
   ```

4. For admin functionality, set admin credentials in `.env.local`:
   ```bash
   echo "ADMIN_USERNAME=admin" >> .env.local
   echo "ADMIN_PASSWORD=admin123" >> .env.local
   ```

## Running the Application

### Development Mode

To run both frontend and backend in development mode:

1. Start the backend server:
   ```bash
   cd backend
   php artisan serve
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser to `http://localhost:3000` to access the application.

### Alternative: Using Concurrent Scripts

The backend has a convenient script to run both applications:

```bash
cd backend
composer run dev
```

This will start both the Laravel server and the Vite development server concurrently.

## API Endpoints

### Products
- `GET /api/products` - Retrieve all products
- `POST /api/products` - Create a new product
- `GET /api/products/{id}` - Retrieve a single product
- `PUT /api/products/{id}` - Update an existing product
- `DELETE /api/products/{id}` - Delete a product

### Categories
- `GET /api/categories` - Retrieve all categories
- `POST /api/categories` - Create a new category (requires admin auth)
- `PUT /api/categories/{id}` - Update a category (requires admin auth)
- `DELETE /api/categories/{id}` - Delete a category (requires admin auth)

## Database Schema

### Products Table
- `id` - Primary key (auto-increment)
- `name` - String, required
- `description` - Text, optional
- `price` - Decimal, required
- `stock` - Integer, required
- `image_url` - String, optional
- `category_id` - Foreign key to categories table, optional
- `timestamps` - created_at and updated_at

### Categories Table
- `id` - Primary key (auto-increment)
- `name` - String, required
- `description` - Text, optional
- `timestamps` - created_at and updated_at

## Admin Credentials

Default admin credentials for category management:
- Username: `admin`
- Password: `admin123`

These can be changed in the `.env` file or environment variables.


### Useful Commands

**Backend:**
```bash
# Run tests
php artisan test

# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear

# Generate migration
php artisan make:migration create_products_table

# Run migrations
php artisan migrate

# Rollback migrations
php artisan migrate:rollback
```

**Frontend:**
```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## License

This project is open source and available under the [MIT License](LICENSE).
