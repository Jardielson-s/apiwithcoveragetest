import * as Joi from 'joi'

export const validator = Joi.object({
    RESTIFY_PORT: Joi.required(),
}).options({ abortEarly: false })