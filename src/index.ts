import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './database';
import routesV1 from './routes';
import { ApiError } from './util/error';
import { environment } from './config';

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/v1', routesV1);

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    if (environment === 'development') {
    //   Logger.error(err);
      return res.status(500).send(err.message);
    }
    // ApiError.handle(new InternalError(), res);
  }
});

export default app;