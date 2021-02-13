import Joi from 'joi';
import { Request, NextFunction } from 'express';
import { BadRequestError } from '../util/error';

export enum ValidationSource {
  BODY = 'body',
  HEADER = 'headers',
  QUERY = 'query',
  PARAM = 'params',
}

export default (schema: Joi.ObjectSchema, source: ValidationSource = ValidationSource.BODY) => (
  req: Request,
  // res: Response,
  next: NextFunction,
) => {
  console.log(req.body);
  try {
    const { error } = schema.validate(req[source]);

    if (!error) return next();

    const { details } = error;
    const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',');

    next(new BadRequestError(message));
  } catch (error) {
    next(error);
  }
};
