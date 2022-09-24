import { HealthCheckUseCase } from '../../domain/use-cases/health-check.use-case'
import { HealthCheckController } from '../../presentation/controllers/health-check.controller'
import { server } from '../restify/restify'
import { adapRouter } from '../adapter/restify.adapter'
import { envs } from '../../config/envs/envs'

server.get(
    '/health-check',
    adapRouter(new HealthCheckController(new HealthCheckUseCase()))
)

export const startRestifyServer = () => {
    server.listen(envs.RESTIFY_PORT, () => {
        console.log(`RESTIFY SERVER RUNNING IN PORT: `, envs.RESTIFY_PORT)
    })
}
