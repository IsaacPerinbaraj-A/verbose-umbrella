import express from 'express';
import contactRoutes from './contactRoutes.js';

const router = express.Router();

// Mount route modules
router.use('/contact', contactRoutes);

export default router;

