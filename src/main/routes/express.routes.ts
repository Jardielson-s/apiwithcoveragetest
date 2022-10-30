import * as swaggerUi from 'swagger-ui-express'
import * as swaggerJSDoc from 'swagger-jsdoc'

import { envs } from '../../config/envs/envs'
import { CreateUserUseCase } from '../../domain/use-cases/create-user/create-user.use-case'
import { HealthCheckUseCase } from '../../domain/use-cases/health-check.use-case'
import { userRepository } from '../../infrastructure/orm/mongoose/mongoose.module'
import { CreateUserController } from '../../presentation/controllers/create-user.controller'
import { HealthCheckController } from '../../presentation/controllers/health-check.controller'
import { adapRouterExpress } from '../adapter/express.adapter'
import app from '../express/express'
import { logger } from '../../infrastructure/logs/elasticSearch/logger'
import { FindByIdUseController } from '../../presentation/controllers/find-by-id-user.controller'
import { FindUserByIdUseCase } from '../../domain/use-cases/find-user-id/find-user-id.use-case'
import { ValidateAccountController } from '../../presentation/controllers/validate-account.controller'
import { ValidateAccountUseCase } from '../../domain/use-cases/validate-account/validate-account.use-case'
import { UpateUseController } from '../../presentation/controllers/update-user.controller'
import { UpdateUserUseCase } from '../../domain/use-cases/update-user/update-user.use-case'
import { PhysicalDeleteController } from '../../presentation/controllers/physical-delete.controller'
import { PhysicalDeleteUseCase } from '../../domain/use-cases/physical-delete/physical-delete.use-case'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library API',
            version: '1.0.0',
            description: 'A simple Express Library API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [`${__dirname}/*.swagger.+(ts|js)`],
}
const specs = swaggerJSDoc(options)

export const startServerExpress = async () => {
    const database = await userRepository()
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

    app.get(
        '/health-check',
        adapRouterExpress(
            new HealthCheckController(new HealthCheckUseCase(logger))
        )
    )
    app.post(
        '/api/user',
        adapRouterExpress(
            new CreateUserController(new CreateUserUseCase(database, logger))
        )
    )

    app.get(
        '/api/user/:id',
        adapRouterExpress(
            new FindByIdUseController(new FindUserByIdUseCase(database, logger))
        )
    )

    app.post(
        '/api/user/:id',
        adapRouterExpress(
            new ValidateAccountController(
                new ValidateAccountUseCase(database, logger)
            )
        )
    )

    app.patch(
        '/api/user/:id',
        adapRouterExpress(
            new UpateUseController(new UpdateUserUseCase(database, logger))
        )
    )

    app.delete(
        '/api/user/:id',
        adapRouterExpress(
            new PhysicalDeleteController(
                new PhysicalDeleteUseCase(database, logger)
            )
        )
    )
    app.listen(envs.EXPRESS_PORT, () => {
        console.log(`EXPRESS SERVER RUNNING IN PORTS: ${envs.EXPRESS_PORT}`)
    })
}
