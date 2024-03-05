import { Router } from 'express';
const router = Router();
import {
    authenticateUser,
    authorizePermissions,
} from '../middlewares/auth.middleware.js';

import {
    getCurrentUser,
    getApplicationStats,
    updateUser,
} from '../controllers/user.controller.js';
import { validateUpdateUserInput } from '../middlewares/validation.middleware.js';

router.get('/current-user', getCurrentUser);
router.get(
    '/admin/app-stats',
    authorizePermissions('admin'),
    getApplicationStats
);
router.post('/update-user', validateUpdateUserInput, updateUser);

export default router;
