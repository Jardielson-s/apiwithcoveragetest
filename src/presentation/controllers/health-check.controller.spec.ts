import { HealthCheckController } from './health-check.controller'
import { IUseCase } from '../../shared/interfaces/IUseCase.interface'
import { useCaseStub } from '../../shared/test/stub/repository.stub'

describe(HealthCheckController.name, () => {
  let useCase: IUseCase<unknown, unknown>
  let controller: HealthCheckController

  beforeEach(() => {
    jest.clearAllMocks()

    useCase = useCaseStub()
    controller = new HealthCheckController(useCase)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should be defined method handle', () => {
    expect(controller.handler).toBeDefined()
  })

  it('should able execute when call', async () => {
    const useCaseSpyOn = jest.spyOn(useCase, 'execute')

    await controller.handler()

    expect(useCaseSpyOn).toHaveBeenCalled()
  })

  it('should able execute with error when call', async () => {
    controller = new HealthCheckController({} as any)
    const response = await controller.handler()
    expect(response).toBeDefined()
  })
})
