import { Router } from 'express';
const router = Router();

import {
    getAJob,
    getAllJobs,
    patchAJob,
    deleteAJob,
    createAJob,
} from '../controllers/job.controller.js';
import { validateJobInput } from '../middlewares/validation.middleware.js';

router.route('/').get(getAllJobs).post(validateJobInput, createAJob);
router
    .route('/:id')
    .get(getAJob)
    .patch(validateJobInput, patchAJob)
    .delete(deleteAJob);

export default router;
