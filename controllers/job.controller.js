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
    return res.status(200).json({ jobs });
};

//get single job
export const getAJob = async (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    return res.status(200).json({ job });
};

//patch a job
export const patchAJob = async (req, res) => {
    const { company, position } = req.body; //get compnay and position from body
    if (!company || !position) {
        return res
            .status(400)
            .json({ msg: 'please provide company and position' });
    }

    const { id } = req.params; //get id from params
    const job = jobs.find((j) => j.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    job.company = company;
    job.position = position;
    return res.status(200).json({ msg: 'job modified', job });
};

//delete a job
export const deleteAJob = async (req, res) => {
    const { id } = req.params; //get id from params
    const job = jobs.find((j) => j.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    const newJobs = jobs.filter((j) => j.id !== id);
    jobs = newJobs;
    return res.status(200).json({ msg: 'job deleted', length: jobs.length });
};
