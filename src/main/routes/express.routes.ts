import * as swaggerUi from 'swagger-ui-express'
import * as swaggerJSDoc from 'swagger-jsdoc'

import { envs } from '../../config/envs/envs'
import app from '../express/express'
import { adapRouterExpress } from '../adapter/express.adapter'
import { SendEmail } from '../../infrastructure/send-email/send-email'
import { request } from '../../infrastructure/send-email/config/send-email.config'
import { logger } from '../../infrastructure/logs/elasticSearch/logger'
import { userRepository } from '../../infrastructure/orm/mongoose/mongoose.module'
import {
  CreateUserController,
  FindByIdUseController,
  HealthCheckController,
  PhysicalDeleteController,
  UpateUseController,
  ValidateAccountController
} from '../../presentation/presentation.module'
import {
  CreateUserUseCase,
  FindUserByIdUseCase,
  HealthCheckUseCase,
  PhysicalDeleteUseCase,
  UpdateUserUseCase,
  ValidateAccountUseCase
} from '../../domain/domain.module'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A simple Express Library API'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: [`${__dirname}/*.swagger.+(ts|js)`]
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
      new CreateUserController(new CreateUserUseCase(database, new SendEmail(request), logger))
    )
  )

  app.get(
    '/api/user/:id',
    adapRouterExpress(
      new FindByIdUseController(new FindUserByIdUseCase(database, logger))
    )
  )

  app.get(
    '/api/user/:id/active',
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
