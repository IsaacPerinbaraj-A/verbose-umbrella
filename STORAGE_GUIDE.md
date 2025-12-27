# Data Storage Guide

This guide explains where and how contact form data is stored in the Altrustity application.

## Current Storage: JSON File

### Location
Contact form submissions are stored in:
```
backend/data/contacts.json
```

### Structure
The file contains a JSON array of contact objects:
```json
[
  {
    "id": "1703702400000",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "service": "web-development",
    "message": "I need a website for my business",
    "createdAt": "2025-12-27T12:00:00.000Z"
  }
]
```

### How It Works

1. **Submission**: When a user submits the contact form:
   - Data is validated
   - A unique ID is generated (timestamp-based)
   - Contact is saved to `contacts.json`
   - Response is sent to frontend

2. **Storage**: The `backend/utils/storage.js` module handles:
   - Creating the data directory if it doesn't exist
   - Reading from `contacts.json`
   - Writing new contacts to the file
   - Managing the JSON array structure

3. **Access**: You can:
   - View all contacts via `GET /api/contact`
   - Get a specific contact via `GET /api/contact/:id`
   - Delete a contact via `DELETE /api/contact/:id`

## Viewing Stored Data

### Option 1: Via API
```bash
# Get all contacts
curl http://localhost:5000/api/contact

# Get specific contact
curl http://localhost:5000/api/contact/1703702400000
```

### Option 2: Direct File Access
```bash
# View the JSON file
cat backend/data/contacts.json

# Or open in a text editor
code backend/data/contacts.json
```

### Option 3: Admin Dashboard (Future)
You could create an admin page in the frontend to view and manage contacts.

## Upgrading to Database

For production, you'll want to use a proper database. Here are options:

### Option 1: SQLite (Recommended for small apps)
- Lightweight, file-based
- No separate server needed
- Easy to set up
- Good for small to medium applications

### Option 2: PostgreSQL (Recommended for production)
- Full-featured relational database
- Scalable and reliable
- Industry standard
- Requires database server

### Option 3: MongoDB (NoSQL option)
- Document-based storage
- Flexible schema
- Good for rapid development
- Requires MongoDB server

## Migration Path

When ready to upgrade to a database:

1. **Install database driver**:
   ```bash
   npm install sqlite3  # or pg, or mongodb
   ```

2. **Create database models**:
   - Define schema/structure
   - Create connection utilities

3. **Update storage functions**:
   - Replace file operations with database queries
   - Keep the same function signatures

4. **Migrate existing data**:
   - Read from `contacts.json`
   - Import into database

## Security Considerations

### Current Setup
- ✅ Data directory is gitignored
- ✅ File permissions should be restricted
- ⚠️ No encryption (consider for sensitive data)
- ⚠️ No access control (add authentication for admin endpoints)

### Recommendations
1. **Add authentication** to admin endpoints
2. **Encrypt sensitive data** (phone numbers, etc.)
3. **Implement rate limiting** to prevent spam
4. **Add data validation** on backend
5. **Regular backups** of the data file

## Backup Strategy

### Manual Backup
```bash
# Copy the contacts file
cp backend/data/contacts.json backend/data/contacts.backup.json
```

### Automated Backup (Future)
- Set up cron job to backup daily
- Use cloud storage (AWS S3, etc.)
- Implement versioning

## File Location Details

```
backend/
├── data/                    # Storage directory (gitignored)
│   ├── .gitkeep            # Keeps directory in git
│   └── contacts.json       # Contact submissions (not in git)
├── utils/
│   └── storage.js          # Storage utility functions
└── routes/
    └── contactRoutes.js    # API routes using storage
```

## Troubleshooting

### File Not Created
- Check that `backend/data/` directory exists
- Verify write permissions
- Check server logs for errors

### Data Not Persisting
- Ensure server has write access
- Check file permissions
- Verify storage functions are being called

### File Corruption
- Restore from backup
- Check JSON syntax
- Validate file structure

## Next Steps

1. ✅ **Current**: JSON file storage (implemented)
2. 🔄 **Next**: Add database support
3. 🔄 **Future**: Admin dashboard to view contacts
4. 🔄 **Future**: Email notifications on new submissions
5. 🔄 **Future**: Export functionality (CSV, Excel)

