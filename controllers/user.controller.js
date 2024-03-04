import { StatusCodes } from 'http-status-codes';
import User from '../models/User.Model.js';

export const register = async (req, res) => {
    const user = await User.create(req.body);
    return res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
    return res.json('hello from login');
};
