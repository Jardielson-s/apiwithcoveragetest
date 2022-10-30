import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import {
    repositoryStub,
    serviceLoggerStub,
} from '../../../shared/test/stub/repository.stub'
import { CreateUserUseCase } from './create-user.use-case'

describe(CreateUserUseCase.name, () => {
    let useCase: IUseCase<any, any>
    let repository: IRepository<any>
    let loggerService: ILoggerService

    let params = {
        name: 'Jonh Doe',
        email: 'JonhDoe@gmail.com',
        password: 'JohnDoe1234',
    }
    beforeEach(() => {
        jest.clearAllMocks()

        loggerService = serviceLoggerStub()
        repository = repositoryStub()
        useCase = new CreateUserUseCase(repository, loggerService)
    })

    it('should be defined', () => {
        expect(useCase).toBeDefined()
    })

    it('should be defined method execute', () => {
        expect(useCase.execute).toBeDefined()
    })

    it('should able method execute with sucess', async () => {
        const repositorySpyOn = jest.spyOn(repository, 'save')

        await useCase.execute(params)

        expect(repositorySpyOn).toHaveBeenCalled()
    })

    it('should able method execute with error', async () => {
        const error = new Error('User email already Exists')
        jest.spyOn(repository, 'findByEmail').mockResolvedValue(params.email)
        await expect(useCase.execute(params)).rejects.toThrow(error)
    })
})
