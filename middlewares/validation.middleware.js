import { body, param, validationResult } from 'express-validator';
import {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
} from '../errors/custom.error.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import mongoose from 'mongoose';
import Job from '../models/Job.Model.js';
import User from '../models/User.Model.js';

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages[0].startsWith('no job')) {
                    throw new NotFoundError(errorMessages);
                }
                if (errorMessages[0].startsWith('not authorized')) {
                    throw new UnauthorizedError(
                        'not authorized to access this route'
                    );
                }
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
};

//validate job input
export const validateJobInput = withValidationErrors([
    body('company').notEmpty().withMessage('company name is required'),
    body('position').notEmpty().withMessage('position is required'),
    body('jobLocation').notEmpty().withMessage('location is required'),
    body('jobStatus')
        .isIn(Object.values(JOB_STATUS))
        .withMessage('invalid status value'),
    body('jobType')
        .isIn(Object.values(JOB_TYPE))
        .withMessage('invalid job type'),
]);

//validate job id
export const validateIdParam = withValidationErrors([
    param('id').custom(async (value, { req }) => {
        const isValid = mongoose.Types.ObjectId.isValid(value);
        if (!isValid) throw new BadRequestError('invalid mongoDB Id');
        const job = await Job.findById(value);
        if (!job) throw new NotFoundError(`no job with id: ${value}`);
        const isAdmin = req.user.role === 'admin';
        const isOwner = req.user.userId === job.createdBy.toString();
        if (!isAdmin && !isOwner)
            throw new UnauthorizedError('not authorized to access this route');
    }),
]);

//validate user creation
export const validateNewUser = withValidationErrors([
    body('name')
        .notEmpty()
        .withMessage('name is required')
        .isLength({ min: 3, max: 20 })
        .withMessage('name must be between 3 and 20 characters long'),
    body('lastName')
        .notEmpty()
        .withMessage('last name is required')
        .isLength({ min: 3, max: 20 })
        .withMessage('last name must be between 3 and 20 characters long'),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new BadRequestError('email already exist');
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 8, max: 15 })
        .withMessage('password can be between 8 and 15 characters long'),
    body('location').notEmpty().withMessage('location is required'),
]);

//validate user login
export const validateUserLogin = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email'),
    body('password').notEmpty().withMessage('password is required'),
]);

//test validator
export const validateTest = withValidationErrors([
    body('name')
        .notEmpty()
        .withMessage('name is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('name must be between 3 and 50 characters long.')
        .trim(),
]);

export const validateUpdateUserInput = withValidationErrors([
    body('name')
        .notEmpty()
        .withMessage('name is required')
        .isLength({ min: 3, max: 20 })
        .withMessage('name must be between 3 and 20 characters long'),
    body('lastName')
        .notEmpty()
        .withMessage('last name is required')
        .isLength({ min: 3, max: 20 })
        .withMessage('last name must be between 3 and 20 characters long'),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format')
        .custom(async (email, { req }) => {
            const user = await User.findOne({ email });
            if (user && user._id.toString() !== req.user.userId) {
                throw new BadRequestError('email already exist');
            }
        }),
    body('location').notEmpty().withMessage('location is required'),
]);
