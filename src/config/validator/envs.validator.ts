import * as Joi from 'joi'

export const validator = Joi.object({
  RESTIFY_PORT: Joi.required(),
  EXPRESS_PORT: Joi.required(),
  MONGO_URI: Joi.required(),
  ELASTIC_SEARCH: Joi.required(),
  ELASTIC_SEARCH_USER: Joi.required(),
  ELASTIC_SEARCH_PASSWORD: Joi.required(),
  LOG_SOURCE: Joi.required(),
  MYSQL_DB_NAME: Joi.required(),
  MYSQL_DB_USER: Joi.required(),
  MYSQL_DB_PASSWORD: Joi.required(),
  MYSQL_DB_HOST: Joi.required(),
  SERVICE_SEND_EMAIL: Joi.required(),
  EMAIL_FROM: Joi.required()
}).options({ abortEarly: false })
