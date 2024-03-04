import { Router } from 'express';
import { login, register } from '../controllers/user.controller.js';
import { validateNewUser } from '../middlewares/validation.middleware.js';

const router = Router();

router.post('/register', validateNewUser, register);
router.post('/login', login);

export default router;
