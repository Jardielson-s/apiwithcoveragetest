import * as restify from 'restify'
import { server } from '../restify/restify'
import { adapRouterRestify } from '../adapter/restify.adapter'
import { envs } from '../../config/envs/envs'
import { CreateUserController } from '../../presentation/controllers/create-user.controller'
import { CreateUserUseCase } from '../../domain/use-cases/create-user/create-user.use-case'
import { userRepository } from '../../infrastructure/orm/mongoose/mongoose.module'
import { HealthCheckController } from '../../presentation/controllers/health-check.controller'
import { HealthCheckUseCase } from '../../domain/use-cases/health-check.use-case'

export const startRestifyServer = async () => {
    server.use(restify.plugins.bodyParser({ mapParams: true }))

    server.get(
        '/health-check',
        adapRouterRestify(new HealthCheckController(new HealthCheckUseCase()))
    )
    server.post(
        '/api/create-user',
        adapRouterRestify(
            new CreateUserController(
                new CreateUserUseCase(await userRepository())
            )
        )
    )

    server.listen(envs.RESTIFY_PORT, () => {
        console.log(`RESTIFY SERVER RUNNING IN PORT: `, envs.RESTIFY_PORT)
    })
}
