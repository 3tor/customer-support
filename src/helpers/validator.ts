// import Joi from 'joi';
// import { Request, NextFunction } from 'express';

// export enum ValidationSource {
//   BODY = 'body',
//   HEADER = 'headers',
//   QUERY = 'query',
//   PARAM = 'params',
// }

// export default (schema: Joi.ObjectSchema, source: ValidationSource = ValidationSource.BODY) => (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { error } = schema.validate(req[source]);

//     if (!error) return next();

//     const { details } = error;
//     const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',');
//     Logger.error(message);

//     next(new BadRequestError(message));
//   } catch (error) {
//     next(error);
//   }
// };

// export function validateInput (schema: Joi.ObjectSchema) : void {
//   console.log("sckck",schema);
//   return true;
//   // return next();
// };
// export default (schema: Joi.ObjectSchema, source: ValidationSource = ValidationSource.BODY) => (
//   req: Request,
//   // res: Response,
//   next: NextFunction,
// ) => {
//   console.log(req.body);
//   try {
//     const { error } = schema.validate(req[source]);

//     if (!error) return next();

//     // const { details } = error;
//     // const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',');
//     // Logger.error(message);

//     // next(new BadRequestError(message));
//   } catch (error) {
//     next(error);
//   }
// };

// export function validateInput(
//   schema: ObjectSchema,
//   fields: { [key: string]: any }
// ): { [key: string]: any } | { error: string } {
//   const validationResult = schema.validate(fields);
//   if (validationResult.error) {
//     return {
//       error: validationResult.error.details[0].message,
//     };
//   }
//   return fields;
// }