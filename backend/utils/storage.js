import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Storage directory
const STORAGE_DIR = path.join(__dirname, '../data');
const CONTACTS_FILE = path.join(STORAGE_DIR, 'contacts.json');

/**
 * Ensure storage directory exists
 */
export const ensureStorageDir = async () => {
  try {
    await fs.mkdir(STORAGE_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating storage directory:', error);
    throw error;
  }
};

/**
 * Read all contacts from storage
 */
export const readContacts = async () => {
  try {
    await ensureStorageDir();
    const data = await fs.readFile(CONTACTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File doesn't exist, return empty array
      return [];
    }
    console.error('Error reading contacts:', error);
    throw error;
  }
};

/**
 * Save a new contact to storage
 */
export const saveContact = async (contactData) => {
  try {
    await ensureStorageDir();
    
    const contacts = await readContacts();
    
    const newContact = {
      id: Date.now().toString(), // Simple ID generation
      ...contactData,
      createdAt: new Date().toISOString(),
    };
    
    contacts.push(newContact);
    
    await fs.writeFile(
      CONTACTS_FILE,
      JSON.stringify(contacts, null, 2),
      'utf-8'
    );
    
    return newContact;
  } catch (error) {
    console.error('Error saving contact:', error);
    throw error;
  }
};

/**
 * Get all contacts
 */
export const getAllContacts = async () => {
  return await readContacts();
};

/**
 * Get a contact by ID
 */
export const getContactById = async (id) => {
  const contacts = await readContacts();
  return contacts.find(contact => contact.id === id);
};

/**
 * Delete a contact by ID
 */
export const deleteContact = async (id) => {
  try {
    const contacts = await readContacts();
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    
    await fs.writeFile(
      CONTACTS_FILE,
      JSON.stringify(filteredContacts, null, 2),
      'utf-8'
    );
    
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

