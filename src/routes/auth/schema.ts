import Joi from 'joi';

export default {
  signup: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
  }),
};

// export const validationSchema = Joi.object({
//   email: Joi.string().email(),
//   password: Joi.string().min(5),
// });