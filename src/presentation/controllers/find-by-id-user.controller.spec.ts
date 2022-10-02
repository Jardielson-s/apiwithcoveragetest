import { IController } from 'src/shared/interfaces/IController.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { FindByIdUseController } from './find-by-id-user.controller'

const stub = Object.freeze({
    execute: jest.fn(),
})
export const useCaseStub = () => stub as IUseCase<unknown>

describe(FindByIdUseController.name, () => {
    let useCase: IUseCase<any>
    let controller: IController

    beforeEach(() => {
        jest.clearAllMocks()

        useCase = useCaseStub()
        controller = new FindByIdUseController(useCase)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('should be defined method handler', () => {
        expect(controller.handler).toBeDefined()
    })

    it('shoul able execute hanlder method', async () => {
        const useCaseSpyOn = jest.spyOn(useCase, 'execute')

        await controller.handler({ id: 'd51f33450af2400fa83e374b55573543' })

        expect(useCaseSpyOn).toHaveBeenCalled()
    })

    it('should be error in execute', async () => {
        const error = { body: undefined, status: 500 }
        jest.spyOn(useCase, 'execute').mockRejectedValue('User id not Exists')
        const response = await controller.handler({ id: '' })
        expect(response).toEqual(error)
    })

    it('should be error in execute', async () => {
        const error = { body: 'User id not Exists', status: 404 }
        jest.spyOn(useCase, 'execute').mockRejectedValue(
            new Error('User id not Exists')
        )
        const response = await controller.handler({ id: '' })
        expect(response).toEqual(error)
    })
})
