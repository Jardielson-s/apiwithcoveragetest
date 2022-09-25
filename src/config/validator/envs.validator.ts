import * as Joi from 'joi'

export const validator = Joi.object({
    RESTIFY_PORT: Joi.required(),
    EXPRESS_PORT: Joi.required(),
    MONGO_URI: Joi.required(),
}).options({ abortEarly: false })
