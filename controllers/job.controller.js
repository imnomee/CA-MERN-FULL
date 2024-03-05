import Job from '../models/Job.Model.js';
import { StatusCodes } from 'http-status-codes';

//create a new job
export const createAJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    //all the info is provided by the user
    //but we need to add created by here from the token
    const { company, position } = req.body;
    const job = await Job.create(req.body);
    return res.status(StatusCodes.CREATED).json({ job });
};

//get all jobs
export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId });
    return res.status(StatusCodes.OK).json({ length: jobs.length, jobs });
};

//get single job
export const getAJob = async (req, res) => {
    const job = await Job.findById(req.params.id);
    return res.status(StatusCodes.OK).json({ job });
};

//patch a job
export const patchAJob = async (req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    return res.status(StatusCodes.OK).json({ msg: 'job updated', updatedJob });
};

//delete a job
export const deleteAJob = async (req, res) => {
    const removedJob = await Job.findByIdAndDelete(req.params.id);

    return res.status(StatusCodes.OK).json({ msg: 'job deleted', removedJob });
};
