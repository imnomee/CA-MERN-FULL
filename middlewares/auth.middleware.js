//1. access token by req.cookies.token
//2. verify token
//3. get user from the token
import {
    UnauthenticatedError,
    UnauthorizedError,
} from '../errors/custom.error.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) throw new UnauthenticatedError('authentication invalid');

    //we have user id and user role in token
    try {
        const { userId, role } = verifyJWT(token);
        req.user = { userId, role };

        next();
    } catch (error) {
        throw new UnauthenticatedError(error);
    }
};

export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        console.log(roles);
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('unauthorized to access this route');
        }
        next();
    };
};
