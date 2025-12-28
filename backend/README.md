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

<<<<<<< HEAD
### Contact Form
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, phone, service, message }`
  - Returns: Success message and saved contact data
- `GET /api/contact` - Get all contacts (for admin)
- `GET /api/contact/:id` - Get a specific contact by ID
- `DELETE /api/contact/:id` - Delete a contact by ID

### Base
- `GET /` - API information

## Data Storage

Contact form submissions are stored in:
- **Location**: `backend/data/contacts.json`
- **Format**: JSON array of contact objects
- **Structure**: Each contact includes:
  - `id`: Unique identifier
  - `name`, `email`, `phone`, `service`, `message`: Form data
  - `createdAt`: Timestamp of submission

**Note**: The `data/` directory is gitignored to keep submissions private.

=======
### Base
- `GET /` - API information

>>>>>>> a7fd5830ef05bd3734ca279a3fe96ff674fda5cb
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

