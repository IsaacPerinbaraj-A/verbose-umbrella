import express from 'express';
import { saveContact, getAllContacts, getContactById, deleteContact } from '../utils/storage.js';

const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validation
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        error: 'All fields are required',
        fields: { name, email, phone, service, message }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email address'
      });
    }

    // Save to storage
    const contactData = {
      name,
      email,
      phone,
      service,
      message
    };

    const savedContact = await saveContact(contactData);
    
    console.log('Contact form submission saved:', savedContact.id);

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      data: {
        id: savedContact.id,
        name: savedContact.name,
        email: savedContact.email,
        service: savedContact.service,
        submittedAt: savedContact.createdAt
      }
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      error: 'Failed to submit contact form',
      message: error.message
    });
  }
});

// GET /api/contact - Get all contacts (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      error: 'Failed to fetch contacts',
      message: error.message
    });
  }
});

// GET /api/contact/:id - Get a specific contact
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);
    
    if (!contact) {
      return res.status(404).json({
        error: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      error: 'Failed to fetch contact',
      message: error.message
    });
  }
});

// DELETE /api/contact/:id - Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteContact(id);
    
    if (!deleted) {
      return res.status(404).json({
        error: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      error: 'Failed to delete contact',
      message: error.message
    });
  }
});

export default router;

