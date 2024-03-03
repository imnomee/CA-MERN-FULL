//this controller takes control of the functions we run on the routes

// import { nanoid } from 'nanoid';

// let jobs = [
//     {
//         id: nanoid(10),
//         company: 'apple',
//         position: 'front-end',
//     },
//     {
//         id: nanoid(10),
//         company: 'google',
//         position: 'back-end',
//     },
// ];

import Job from '../models/Job.Model.js';

//create a new job
export const createAJob = async (req, res) => {
    const { company, position } = req.body;
    const job = await Job.create({ company, position });
    return res.status(200).json({ job });
};

//get all jobs
export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    return res.status(200).json({ jobs });
};

//get single job
export const getAJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    return res.status(200).json({ job });
};

//patch a job
export const patchAJob = async (req, res) => {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedJob) {
        return res.status(404).json({ msg: `no job with id: ${id}.` });
    }

    return res.status(201).json({ msg: 'job updated', updatedJob });
};

//delete a job
export const deleteAJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);
    if (!removedJob) {
        return res.status(404).json({ msg: `no job with id: ${id}.` });
    }
    return res.status(200).json({ msg: 'job deleted', removedJob });
};
