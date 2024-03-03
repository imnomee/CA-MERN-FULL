import Job from '../models/Job.Model.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/custom.error.js';

//create a new job
export const createAJob = async (req, res) => {
    const { company, position } = req.body;
    const job = await Job.create({ company, position });
    return res.status(StatusCodes.CREATED).json({ job });
};

//get all jobs
export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    return res.status(StatusCodes.OK).json({ jobs });
};

//get single job
export const getAJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) throw new NotFoundError(`No Job found with the id: ${id}`);
    return res.status(StatusCodes.OK).json({ job });
};

//patch a job
export const patchAJob = async (req, res) => {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedJob) throw new NotFoundError(`No Job found with the id: ${id}`);

    return res.status(StatusCodes.OK).json({ msg: 'job updated', updatedJob });
};

//delete a job
export const deleteAJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);
    if (!removedJob) throw new NotFoundError(`No Job found with the id: ${id}`);

    return res.status(StatusCodes.OK).json({ msg: 'job deleted', removedJob });
};
