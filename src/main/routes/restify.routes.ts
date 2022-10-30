import * as restify from 'restify'
import * as morgan from 'morgan'

import { server } from '../restify/restify'
import { adapRouterRestify } from '../adapter/restify.adapter'
import { envs } from '../../config/envs/envs'
import { CreateUserController } from '../../presentation/controllers/create-user.controller'
import { CreateUserUseCase } from '../../domain/use-cases/create-user/create-user.use-case'
import { HealthCheckController } from '../../presentation/controllers/health-check.controller'
import { HealthCheckUseCase } from '../../domain/use-cases/health-check.use-case'
import { logger } from '../../infrastructure/logs/elasticSearch/logger'
import { FindUserByIdUseCase } from '../../domain/use-cases/find-user-id/find-user-id.use-case'
import { FindByIdUseController } from '../../presentation/controllers/find-by-id-user.controller'
import { userRepository } from '../../infrastructure/orm/mongoose/mongoose.module'

export const startRestifyServer = async () => {
    const databaseRepository = await userRepository()
    server.use(restify.plugins.bodyParser({ mapParams: true }))

    server.get(
        '/health-check',
        adapRouterRestify(
            new HealthCheckController(new HealthCheckUseCase(logger))
        )
    )
    server.post(
        '/api/user',
        adapRouterRestify(
            new CreateUserController(
                new CreateUserUseCase(databaseRepository, logger)
            )
        )
    )
    server.get(
        '/api/user/:id',
        adapRouterRestify(
            new FindByIdUseController(
                new FindUserByIdUseCase(databaseRepository, logger)
            )
        )
    )
    server.listen(envs.RESTIFY_PORT, () => {
        console.log(`RESTIFY SERVER RUNNING IN PORT: `, envs.RESTIFY_PORT)
    })
}
