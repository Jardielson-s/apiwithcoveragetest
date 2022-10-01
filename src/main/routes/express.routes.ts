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
            new CreateUserController(
                new CreateUserUseCase(await userRepository(), logger)
            )
        )
    )
    app.listen(envs.EXPRESS_PORT, () => {
        console.log(`EXPRESS SERVER RUNNING IN PORTS: ${envs.EXPRESS_PORT}`)
    })
}
