import { StatusCodes } from 'http-status-codes';
import User from '../models/User.Model.js';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/custom.error.js';

export const register = async (req, res) => {
    const isFirstAccount = (await User.countDocuments()) === 0;
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;
    req.body.role = isFirstAccount ? 'admin' : 'user';
    const user = await User.create(req.body);

    return res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const isValidUser =
        user && (await comparePassword(req.body.password, user.password));

    if (!isValidUser) throw new UnauthenticatedError('invalid credentials');
    return res.json({ user });
};
