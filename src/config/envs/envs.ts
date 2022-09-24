import { validator } from '../validator/envs.validator'

const valid = validator.validate({
    RESTIFY_PORT: process.env.RESTIFY_PORT,
})

if (valid.error) {
    throw new Error(valid.error.message)
} else {
    console.log(valid.value)
}

export const envs = {
    RESTIFY_PORT: process.env.RESTIFY_PORT,
}
