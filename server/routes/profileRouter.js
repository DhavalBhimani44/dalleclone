import { Router } from 'express';
import { getUserProfile, updateUserProfile, deleteUserAccount } from '../controller/profileController.js';
import authenticateUser from '../middlewares/Auth.js'; 

const router = Router();

// Route to get user profile
router.get('/profile', authenticateUser, getUserProfile);

// Route to update user profile
router.put('/profile', authenticateUser, updateUserProfile);

// Route to delete user account
router.delete('/profile', authenticateUser, deleteUserAccount);

export default router;
