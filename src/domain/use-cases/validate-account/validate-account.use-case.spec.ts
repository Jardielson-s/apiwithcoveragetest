import {
    repositoryStub,
    serviceLoggerStub,
} from '../../../shared/test/stub/repository.stub'
import { ICreateUser } from '../../../domain/interfaces/Icreate-user.interface'
import { ILoggerService } from '../../../shared/interfaces/ILoggerServices.interface'
import { IRepository } from '../../../shared/interfaces/IRepository.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'
import { ValidateAccountUseCase } from './validate-account.use-case'

describe(ValidateAccountUseCase.name, () => {
    let loggerService: ILoggerService
    let repository: IRepository<ICreateUser>
    let useCase: IUseCase<any, any>

    beforeEach(() => {
        jest.clearAllMocks()

        loggerService = serviceLoggerStub()
        repository = repositoryStub()
        useCase = new ValidateAccountUseCase(repository, loggerService)
    })

    it('should be defined', () => {
        expect(useCase).toBeDefined()
    })

    it('should be defined execute method', () => {
        expect(useCase.execute).toBeDefined()
    })

    it('should able execute with sucess', async () => {
        const repositorySpyOne = jest.spyOn(repository, 'findById')
        await useCase.execute('any-id')
        expect(repositorySpyOne).toHaveBeenCalled()
    })

    it('should be execute with success', async () => {
        jest.spyOn(repository, 'findById').mockResolvedValue({} as any)
        const response = await useCase.execute('any-id')
        expect(response).toBe(undefined)
    })

    it('should be execute with error', async () => {
        const error = new Error('Account validation failure')
        jest.spyOn(repository, 'findById').mockResolvedValue(null)
        const response = await useCase.execute('any-id')
        expect(response).toBeDefined()
    })
})
