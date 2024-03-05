import { StatusCodes } from 'http-status-codes';
import User from '../models/User.Model.js';
import Job from '../models/Job.Model.js';

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    //without password
    const userWithoutPassword = user.toJSON();
    return res.status(StatusCodes.OK).json(userWithoutPassword);
};

export const updateUser = async (req, res) => {
    const obj = { ...req.body };
    delete obj.password;
    console.log(obj);
    const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);

    return res.status(StatusCodes.OK).json('update user');
};

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments();
    return res.status(StatusCodes.OK).json({ users, jobs });
};
