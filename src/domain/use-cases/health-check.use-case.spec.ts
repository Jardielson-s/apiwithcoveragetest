import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { HealthCheckUseCase } from './health-check.use-case'

describe(HealthCheckUseCase.name, () => {
    let useCase: IUseCase<unknown, unknown>

    beforeEach(() => {
        useCase = new HealthCheckUseCase()
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
