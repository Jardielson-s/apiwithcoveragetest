import { HealthCheckUseCase } from '../../domain/use-cases/health-check.use-case'
import { HealthCheckController } from '../../presentation/controllers/health-check.controller'
import { server } from '../../infrastructure/restify/restify'
import { adapRouter } from '../adapter/restify.adapter'

server.get(
    '/health-check',
    adapRouter(new HealthCheckController(new HealthCheckUseCase()))
)

export default server
