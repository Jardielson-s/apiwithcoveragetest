import { IController } from '../../shared/interfaces/IController.interface'
import { IUseCase } from '../../shared/interfaces/IUseCase.interface'
import { useCaseStub } from '../../shared/test/stub/repository.stub'
import { FindByIdUserDto } from '../dto/find-by-id-user.dto'
import { ValidateAccountController } from './validate-account.controller'

describe(ValidateAccountController.name, () => {
    let controller: IController<FindByIdUserDto>
    let useCase: IUseCase<any>

    beforeEach(() => {
        jest.clearAllMocks()

        useCase = useCaseStub()
        controller = new ValidateAccountController(useCase)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('should be defined handler method', () => {
        expect(controller.handler).toBeDefined()
    })

    it('should be able execute', async () => {
        const useCaseStub = jest.spyOn(useCase, 'execute')
        await controller.handler({ id: 'any-id' })
        expect(useCaseStub).toHaveBeenCalled()
    })

    it('should be execute with success', async () => {
        const response = await controller.handler({ id: 'any-id' })
        expect(response).toBeDefined()
    })

    it('should be execute with error Account validation failure', async () => {
        jest.spyOn(useCase, 'execute').mockRejectedValue(
            new Error('Account validation failure')
        )
        const response = await controller.handler({ id: 'any-id' })
        expect(response).toBeDefined()
    })

    it('should be execute with error in server', async () => {
        jest.spyOn(useCase, 'execute').mockRejectedValue('')
        const response = await controller.handler({ id: 'any-id' })
        expect(response).toBeDefined()
    })
})
