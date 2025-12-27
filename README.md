# Altrustity - Full-Stack Software Company Portfolio

A modern, production-ready full-stack application for a software development company with React frontend and Express backend.

## Project Structure

```
altrustity/
├── frontend/          # React frontend application
├── backend/          # Express.js backend API
└── package.json      # Root package.json for managing both projects
```

## Features

### Frontend
- 🎨 Modern, professional design with blue/purple color palette
- 🌓 Dark/Light mode with system preference detection
- 📱 Fully responsive (mobile-first design)
- ⚡ Smooth animations with Framer Motion
- ♿ Accessible components with ARIA labels
- 🔍 SEO-friendly structure
- 🎯 7 complete pages: Home, About, Services, Products, Pricing, Portfolio, Contact
- 🧩 Reusable component architecture
- 📝 Form validation
- 🎭 Smooth page transitions

### Backend
- 🚀 Express.js REST API
- 🔒 CORS enabled
- 📊 Request logging with Morgan
- 🔧 Environment variable configuration
- 🏥 Health check endpoint

## Tech Stack

### Frontend
- **React 19** with JavaScript
- **Vite** for fast development and building
- **Tailwind CSS 3** for styling
- **React Router** for navigation
- **Framer Motion** for animations
- **Headless UI** for accessible components
- **React Icons** for icons

### Backend
- **Node.js** with Express.js
- **CORS** for cross-origin requests
- **Morgan** for HTTP request logging
- **dotenv** for environment management

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

Install dependencies for all projects:

```bash
npm run install:all
```

Or install separately:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd ../backend && npm install
```

### Development

**Run both frontend and backend together (Recommended):**
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend dev server on `http://localhost:5173`
- Frontend will proxy API requests to the backend automatically

**Run separately:**

Frontend (runs on http://localhost:5173):
```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```

Backend (runs on http://localhost:5000):
```bash
npm run dev:backend
# or
cd backend && npm run dev
```

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Copy the environment example file:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration (optional, defaults are set)

### Production Build

Build the frontend:
```bash
npm run build:frontend
# or
cd frontend && npm run build
```

Start the backend in production:
```bash
npm run start:backend
# or
cd backend && npm start
```

## API Endpoints

### Health Check
- `GET /api/health` - Check server health status

### Contact
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, phone, service, message }`
  - Returns: Success message and submitted data

### Base
- `GET /` - API information

## Project Structure Details

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, ThemeToggle, ScrollToTop
│   │   ├── ui/              # Button, Card, Section, FormInput
│   │   ├── sections/        # Hero, TrustedClients, ServicesOverview, etc.
│   │   └── shared/          # ServiceCard, ProductCard, PricingCard, etc.
│   ├── pages/               # All 7 page components
│   ├── data/                # Mock data
│   ├── hooks/               # Custom hooks
│   ├── utils/               # Utility functions
│   └── styles/              # Global CSS
├── public/                  # Static assets
└── package.json
```

### Backend
```
backend/
├── server.js               # Main server file
├── routes/                 # API routes (to be created)
├── controllers/            # Route controllers (to be created)
├── models/                 # Data models (to be created)
├── middleware/            # Custom middleware (to be created)
├── utils/                 # Utility functions (to be created)
└── config/                # Configuration files (to be created)
```

## Customization

### Frontend Colors
Colors are defined in `frontend/tailwind.config.js`:
- Primary: Blue shades (`primary-500` to `primary-900`)
- Secondary: Purple shades (`secondary-500` to `secondary-900`)

### Content
All frontend content is stored in `frontend/src/data/`:
- `services.js` - Service definitions
- `products.js` - Product listings
- `pricing.js` - Pricing plans and features
- `portfolio.js` - Case studies
- `testimonials.js` - Client testimonials

## Scripts

### Root Level
- `npm run dev` - Run both frontend and backend in development mode
- `npm run dev:frontend` - Run only frontend
- `npm run dev:backend` - Run only backend
- `npm run build:frontend` - Build frontend for production
- `npm run install:all` - Install all dependencies

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with watch mode

## License

This project is private and proprietary.
