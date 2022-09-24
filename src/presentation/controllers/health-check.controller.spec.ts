import { HealthCheckController } from './health-check.controller'
// import { useCaseStub } from '../../../test/stub/useCase.stub'
import { IUseCase } from '../../shared/interfaces/IUseCase.interface'

const stub = Object.freeze({
    execute: jest.fn(),
})

export const useCaseStub = () => stub as IUseCase<unknown>
describe(HealthCheckController.name, () => {
    let useCase: IUseCase<unknown, unknown>
    let controller: HealthCheckController

    beforeEach(() => {
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
})
