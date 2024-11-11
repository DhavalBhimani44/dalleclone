import { Router } from "express";
import { login, signup } from '../controller/authController.js';
import { loginValidation, signupValidation } from '../middlewares/AuthValidation.js';

const router = Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);


export default router;