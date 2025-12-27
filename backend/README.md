# Altrustity Backend API

Backend server for the Altrustity application.

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your configuration values.

### Running the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Health Check
- `GET /api/health` - Check server health status

### Base
- `GET /` - API information

## Project Structure

```
backend/
├── server.js          # Main server file
├── routes/            # API routes (to be created)
├── controllers/       # Route controllers (to be created)
├── models/           # Data models (to be created)
├── middleware/       # Custom middleware (to be created)
├── utils/           # Utility functions (to be created)
└── config/          # Configuration files (to be created)
```

## Technologies

- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **dotenv** - Environment variable management

