import { Router } from 'express';
const router = Router();

import {
    getAJob,
    getAllJobs,
    patchAJob,
    deleteAJob,
    createAJob,
} from '../controllers/job.controller.js';

router.route('/').get(getAllJobs).post(createAJob);
router.route('/:id').get(getAJob).patch(patchAJob).delete(deleteAJob);

export default router;
