import { FindUserByIdUseCase } from './find-user-id.use-case'
import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IFindByIdUser } from 'src/domain/interfaces/Ifind-by-id-user.interface'
import { ICreateUser } from 'src/domain/interfaces/Icreate-user.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'

const stuLogger = Object.freeze({
    info: jest.fn(),
})
const serviceLoggerStub = (): any => stuLogger as ILoggerService

const stubReposiory = Object.freeze({
    save: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
})
const repositoryStub = (): any => stubReposiory as IRepository<IFindByIdUser>

describe(FindUserByIdUseCase.name, () => {
    let serviceLogger: ILoggerService
    let repository: IRepository<ICreateUser>
    let useCase: IUseCase<any, any>

    beforeEach(() => {
        jest.clearAllMocks()

        serviceLogger = serviceLoggerStub()
        repository = repositoryStub()
        useCase = new FindUserByIdUseCase(repository, serviceLogger)
    })

    it('should be defined', () => {
        expect(useCase).toBeDefined()
    })

    it('shound be defined execute method', () => {
        expect(useCase.execute).toBeDefined()
    })

    it('must be able to execute when called execution method', async () => {
        const repositorySpyOne = jest
            .spyOn(repository, 'findById')
            .mockResolvedValue({} as any)

        await useCase.execute({ id: 'd51f33450af2400fa83e374b55573543' })

        expect(repositorySpyOne).toHaveBeenCalled()
    })

    it('method with success must be executed', async () => {
        jest.spyOn(repository, 'findById').mockResolvedValue(null)
        const response = await useCase.execute({ id: '' })
        expect(response).toBeDefined()
    })
})
