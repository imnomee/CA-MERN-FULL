import 'express-async-errors'; //this needs to stay on the top
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import errorHandlerMiddleware from './middlewares/errorHandler.middleware.js';
import authRouter from './routes/auth.router.js';
import { authenticateUser } from './middlewares/auth.middleware.js';
import jobRouter from './routes/job.router.js';
import cookieParser from 'cookie-parser';

//mongoose
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const app = express();
app.use(express.json()); //make app accepts json data
app.use(cookieParser());
//setup morgan in deveopment env
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); //make app use morgan logger
}

//routes
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/auth', authRouter);

// NOT FOUND REQUEST,
app.use('*', (req, res) => {
    return res.status(404).json({ msg: 'Not Found' });
});

//error middleware, this middleware has to be the last one in order to handle errors
//this middleware gets triggered when we send error from try Catch methods
//Also when we use throw New Error from within a route
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5125;
try {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    app.listen(port, () => console.log('Sever is running on:', port));
} catch (error) {
    console.log(error);
    process.exit(1);
}
