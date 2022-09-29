import * as swaggerUi from 'swagger-ui-express'
import * as swaggerJsdoc from 'swagger-jsdoc'

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
            title: 'LogRocket Express API with Swagger',
            version: '0.1.0',
            description:
                'This is a simple CRUD API application made with Express and documented with Swagger',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'LogRocket',
                url: 'https://logrocket.com',
                email: 'info@email.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['exemple'],
}

const specs = swaggerJsdoc(options)

export const startServerExpress = async () => {
    app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
    )
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
