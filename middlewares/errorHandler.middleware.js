import { StatusCodes } from 'http-status-codes';

//error middleware, this middleware has to be the last one in order to handle errors
//this middleware gets triggered when we send error from try Catch methods
//Also when we use throw New Error from within a route

const errorHandlerMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = err.message || 'something went wrong, try again later.';
    return res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
