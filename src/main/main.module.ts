import { healthCheckController } from '../domain/domain.module'
import { HealthCheckController } from '../presentation/controllers/health-check.controller'

export const injectControllerHealthCheck = new HealthCheckController(
    healthCheckController
)
