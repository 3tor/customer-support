import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './database';

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/v1', routesV1);

export default app;