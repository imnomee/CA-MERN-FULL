import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

const app = express();
app.use(express.json()); //make app accepts json data

//setup morgan in deveopment env
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); //make app use morgan logger
}

const jobs = [
    {
        id: nanoid(10),
        company: 'apple',
        position: 'front-end',
    },
    {
        id: nanoid(10),
        company: 'google',
        position: 'back-end',
    },
];

//routes
app.get('/', (req, res) => {
    res.send('hello world');
});

//get all jobs
app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({ jobs });
});

//get single job
app.get('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    return res.status(200).json({ job });
});

//post a new job
app.post('/api/v1/jobs', (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res
            .status(400)
            .json({ msg: 'Please provide company and position' });
    }

    const id = nanoid(10);
    const job = { id, company, position };
    jobs.push(job);

    return res.status(200).json({ job });
});

const port = process.env.PORT || 5125;

app.listen(port, () => console.log('Sever is running on:', port));
