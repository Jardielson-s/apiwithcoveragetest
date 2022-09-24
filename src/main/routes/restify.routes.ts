import * as restify from 'restify'
import { server } from '../restify/restify'

import { adapRouter } from '../adapter/restify.adapter'
import { envs } from '../../config/envs/envs'
import { injectControllerHealthCheck } from '../main.module'
import { CreateUserController } from '../../presentation/controllers/create-user.controller'
import { CreateUserUseCase } from '../../domain/use-cases/create-user/create-user.use-case'
import { userRepository } from '../../infrastructure/orm/mongoose/mongoose.module'

export const startRestifyServer = async () => {
    server.use(restify.plugins.bodyParser({ mapParams: true }))

    server.get('/health-check', adapRouter(injectControllerHealthCheck))
    server.post(
        '/api/create-user',
        adapRouter(
            new CreateUserController(
                new CreateUserUseCase(await userRepository())
            )
        )
    )

    server.listen(envs.RESTIFY_PORT, () => {
        console.log(`RESTIFY SERVER RUNNING IN PORT: `, envs.RESTIFY_PORT)
    })
}
