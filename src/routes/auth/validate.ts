import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../../util/error";
import schema from './schema';

export const validate_input  = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const signup_schema = schema.signup;
    const { error } = signup_schema.validate(req.body);
 
    if (!error) return next();
    const { details } = error;
    const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',');
    // return res.status(400).json({ success: false, error: message });
    next(new BadRequestError(message));
  } catch (error) {
    next(error);
  }
}