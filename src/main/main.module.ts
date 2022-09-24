import { userRepository } from '../infrastructure/orm/mongoose/mongoose.module'
import { healthCheckController } from '../domain/domain.module'
import { HealthCheckController } from '../presentation/controllers/health-check.controller'
import { CreateUserController } from '../presentation/controllers/create-user.controller'
import { CreateUserUseCase } from '../domain/use-cases/create-user/create-user.use-case'
import { IController } from 'src/shared/interfaces/IController.interface'
import { CreateUserDto } from '../presentation/dto/create-user.dto'

export const injectControllerHealthCheck = new HealthCheckController(
    healthCheckController
)
// export const injectControllerCreateUserController = new CreateUserController(
//     await createUserCase()
// )
