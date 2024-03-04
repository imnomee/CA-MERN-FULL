import { Router } from 'express';
import { login, register } from '../controllers/user.controller.js';
import {
    validateNewUser,
    validateUserLogin,
} from '../middlewares/validation.middleware.js';

const router = Router();

router.post('/register', validateNewUser, register);
router.post('/login', validateUserLogin, login);

export default router;
