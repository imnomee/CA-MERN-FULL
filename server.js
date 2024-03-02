import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import jobRouter from './routes/job.router.js';

const app = express();
app.use(express.json()); //make app accepts json data

//setup morgan in deveopment env
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); //make app use morgan logger
}

//routes
app.use('/api/v1/jobs', jobRouter);

// NOT FOUND REQUEST,
app.use('*', (req, res) => {
    return res.status(404).json({ msg: 'Not Found' });
});

//error middleware, this middleware has to be the last one in order to handle errors
//this middleware gets triggered when we send error from try Catch methods
//Also when we use throw New Error from within a route
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({ msg: 'something went wrong' });
});

const port = process.env.PORT || 5125;

app.listen(port, () => console.log('Sever is running on:', port));
