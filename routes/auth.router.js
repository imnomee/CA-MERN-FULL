import { Router } from 'express';
import { login, logout, register } from '../controllers/auth.controller.js';
import {
    validateNewUser,
    validateUserLogin,
} from '../middlewares/validation.middleware.js';

const router = Router();

router.post('/register', validateNewUser, register);
router.post('/login', validateUserLogin, login);
router.get('/logout', logout);

export default router;
