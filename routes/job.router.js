import { Router } from 'express';
const router = Router();

import {
    getAJob,
    getAllJobs,
    patchAJob,
    deleteAJob,
    createAJob,
} from '../controllers/job.controller.js';
import {
    validateJobInput,
    validateIdParam,
} from '../middlewares/validation.middleware.js';

router.route('/').get(getAllJobs).post(validateJobInput, createAJob);
router
    .route('/:id')
    .get(validateIdParam, getAJob)
    .patch(validateJobInput, patchAJob)
    .delete(validateIdParam, deleteAJob);

export default router;
