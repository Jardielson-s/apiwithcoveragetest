// import * as restify from 'restify'

// import { server } from '../restify/restify'
// import { adapRouterRestify } from '../adapter/restify.adapter'
// import { envs } from '../../config/envs/envs'
// import { logger } from '../../infrastructure/logs/elasticSearch/logger'
// import { userRepository } from '../../infrastructure/orm/mongoose/mongoose.module'
// import {
//   CreateUserController,
//   FindByIdUseController,
//   HealthCheckController
// } from '../../presentation/presentation.module'
// import {
//   CreateUserUseCase,
//   FindUserByIdUseCase,
//   HealthCheckUseCase
// } from '../../domain/domain.module'

// export const startRestifyServer = async () => {
//   const databaseRepository = await userRepository()
//   server.use(restify.plugins.bodyParser({ mapParams: true }))

//   server.get(
//     '/health-check',
//     adapRouterRestify(
//       new HealthCheckController(new HealthCheckUseCase(logger))
//     )
//   )
//   server.post(
//     '/api/user',
//     adapRouterRestify(
//       new CreateUserController(
//         new CreateUserUseCase(databaseRepository, logger)
//       )
//     )
//   )
//   server.get(
//     '/api/user/:id',
//     adapRouterRestify(
//       new FindByIdUseController(
//         new FindUserByIdUseCase(databaseRepository, logger)
//       )
//     )
//   )
//   server.listen(envs.RESTIFY_PORT, () => {
//     console.log('RESTIFY SERVER RUNNING IN PORT: ', envs.RESTIFY_PORT)
//   })
// }
