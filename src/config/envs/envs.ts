import { validator } from '../validator/envs.validator'

const valid = validator.validate({
    RESTIFY_PORT: process.env.RESTIFY_PORT,
    MONGO_URI: process.env.MONGO_URI,
    EXPRESS_PORT: process.env.EXPRESS_PORT,
    ELASTIC_SEARCH: process.env.ELASTIC_SEARCH,
    ELASTIC_SEARCH_USER: process.env.ELASTIC_SEARCH_USER,
    ELASTIC_SEARCH_PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD,
    LOG_SOURCE: process.env.LOG_SOURCE,
})

if (valid.error) {
    throw new Error(valid.error.message)
} else {
    console.log(valid.value)
}

export const envs = {
    SERVER: process.env.SERVER,
    RESTIFY_PORT: process.env.RESTIFY_PORT,
    MONGO_URI: process.env.MONGO_URI,
    EXPRESS_PORT: process.env.EXPRESS_PORT,
    ELASTIC_SEARCH: process.env.ELASTIC_SEARCH,
    ELASTIC_SEARCH_USER: process.env.ELASTIC_SEARCH_USER,
    ELASTIC_SEARCH_PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD,
    LOG_SOURCE: process.env.LOG_SOURCE,
}
