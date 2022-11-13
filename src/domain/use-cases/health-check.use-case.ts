import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IUseCase } from '../../shared/interfaces/IUseCase.interface'

const HEALTH_CHECK_RECEIVED: string = 'health_check_received'
export class HealthCheckUseCase implements IUseCase<void> {
  constructor (private readonly loggerService: ILoggerService) {}
  async execute (): Promise<string> {
    this.loggerService.info(HEALTH_CHECK_RECEIVED)
    return 'HEALTH CHECK OK'
  }
}
