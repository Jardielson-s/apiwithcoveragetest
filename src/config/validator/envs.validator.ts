import * as Joi from 'joi'

export const validator = Joi.object({
    RESTIFY_PORT: Joi.required(),
    EXPRESS_PORT: Joi.required(),
    MONGO_URI: Joi.required(),
    ELASTIC_SEARCH: Joi.required(),
    ELASTIC_SEARCH_USER: Joi.required(),
    ELASTIC_SEARCH_PASSWORD: Joi.required(),
    LOG_SOURCE: Joi.required(),
}).options({ abortEarly: false })
