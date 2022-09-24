import { IController } from 'src/shared/interfaces/IController.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { CreateUserController } from './create-user.controller'

const stub = Object.freeze({
    save: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
})
const stubUseCase = Object.freeze({
    execute: jest.fn(),
})
const repositoryStub = () => stub as IRepository<any>
const useCaseStub = () => stubUseCase as IUseCase<any>

describe(CreateUserController.name, () => {
    let useCase: IUseCase<any>
    let repository: IRepository<any>
    let controller: IController<any>

    beforeEach(() => {
        jest.clearAllMocks()

        //repository = repositoryStub()
        useCase = useCaseStub()
        controller = new CreateUserController(useCase)
    })

    it('shoul be defined', () => {
        expect(controller).toBeDefined()
    })

    it('shoul be defined method handler', () => {
        expect(controller.handler).toBeDefined()
    })

    it('should able execute with sucess', async () => {
        const useCaseSpyOn = jest.spyOn(useCase, 'execute')

        await controller.handler({} as any)

        expect(useCaseSpyOn).toHaveBeenCalled()
    })

    it('should able execute with error', async () => {
        const serverError = { body: undefined, status: 500 }

        jest.spyOn(useCase, 'execute').mockRejectedValue({} as any)

        const reponse = await controller.handler(null)

        expect(reponse).toEqual(serverError)
    })

    it('should able execute with error', async () => {
        const badRequest = {
            body: 'User email already Exists',
            status: 400,
        }
        const useCaseSpyOn = jest
            .spyOn(useCase, 'execute')
            .mockRejectedValue(new Error('User email already Exists'))

        const response = await controller.handler({} as any)
        expect(response).toEqual(badRequest)
        expect(useCaseSpyOn).toHaveBeenCalled()
    })
})
