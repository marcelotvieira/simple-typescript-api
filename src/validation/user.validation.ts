import Joi from 'joi';

const credentialsValidation = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default credentialsValidation;