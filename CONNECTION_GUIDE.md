# Frontend-Backend Connection Guide

This guide explains how the frontend and backend are connected and how they work together.

## Architecture Overview

```
┌─────────────┐         HTTP Requests          ┌─────────────┐
│   Frontend  │ ──────────────────────────────> │   Backend   │
│  (React)    │                                 │  (Express)  │
│ Port: 5173  │ <────────────────────────────── │ Port: 5000  │
└─────────────┘         JSON Responses          ┌─────────────┘
```

## Connection Setup

### 1. CORS Configuration (Backend)

The backend is configured to accept requests from the frontend:

```javascript
// backend/server.js
const corsOptions = {
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
```

### 2. Vite Proxy (Frontend)

In development, Vite proxies API requests to the backend:

```javascript
// frontend/vite.config.js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false,
    }
  }
}
```

This means:
- Frontend makes requests to `/api/contact`
- Vite automatically forwards to `http://localhost:5000/api/contact`

### 3. API Utility Functions (Frontend)

The frontend uses utility functions to make API calls:

```javascript
// frontend/src/utils/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const submitContactForm = async (formData) => {
  return apiRequest('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

## How It Works

### Example: Contact Form Submission

1. **User fills out form** in the frontend
2. **Frontend validates** the form data
3. **Frontend calls API**:
   ```javascript
   await submitContactForm(formData)
   ```
4. **Vite proxy forwards** the request to `http://localhost:5000/api/contact`
5. **Backend receives** the request and processes it
6. **Backend validates** and logs the submission
7. **Backend responds** with success/error
8. **Frontend receives** response and updates UI

### Request Flow

```
User Action
    ↓
ContactForm Component
    ↓
submitContactForm() [api.js]
    ↓
fetch('/api/contact') [Vite Proxy]
    ↓
http://localhost:5000/api/contact [Backend]
    ↓
contactRoutes.js
    ↓
Response JSON
    ↓
ContactForm Component
    ↓
UI Update
```

## Testing the Connection

### 1. Start Both Servers

```bash
npm run dev
```

### 2. Test Backend Directly

```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2025-12-27T..."
}
```

### 3. Test Contact Form

1. Open `http://localhost:5173/contact`
2. Fill out the contact form
3. Submit the form
4. Check browser console for API call
5. Check backend console for received data

### 4. Check Network Tab

Open browser DevTools → Network tab:
- Look for request to `/api/contact`
- Check request/response headers
- Verify CORS headers are present

## Environment Variables

### Backend (.env)

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

**Note:** In development, the Vite proxy handles this automatically, so you don't need to set `VITE_API_URL` unless deploying.

## Production Setup

For production, you'll need to:

1. **Update CORS** in backend to allow your production frontend URL
2. **Set environment variables** for production API URL
3. **Configure reverse proxy** (nginx, etc.) if needed
4. **Update frontend** to use production API URL

## Troubleshooting

### CORS Errors

If you see CORS errors:
- Check that backend CORS allows your frontend URL
- Verify `FRONTEND_URL` in backend `.env`
- Check browser console for specific CORS error

### Connection Refused

If connection is refused:
- Verify backend is running on port 5000
- Check `npm run dev:backend` is working
- Verify no firewall blocking the port

### 404 on API Calls

If API calls return 404:
- Check backend routes are properly mounted
- Verify the endpoint path matches
- Check backend console for route registration

### Proxy Not Working

If Vite proxy isn't working:
- Restart the dev server
- Check `vite.config.js` proxy configuration
- Verify you're using `/api` prefix in requests

## Next Steps

- Add more API endpoints (services, products, etc.)
- Implement database connection
- Add authentication/authorization
- Set up error logging
- Add request rate limiting

