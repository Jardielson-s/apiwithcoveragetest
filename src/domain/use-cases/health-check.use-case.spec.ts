import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { HealthCheckUseCase } from './health-check.use-case'

const stub = Object.freeze({
  info: jest.fn()
})
const LoggerServiceStub = (): any => stub as ILoggerService

describe(HealthCheckUseCase.name, () => {
  let useCase: IUseCase<unknown, unknown>
  let loggerService: ILoggerService

  beforeEach(() => {
    loggerService = LoggerServiceStub()
    useCase = new HealthCheckUseCase(loggerService)
  })

  it('should be defined', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should be defined response', async () => {
    const response = await useCase.execute()

    expect(response).toBeDefined()
  })
})
