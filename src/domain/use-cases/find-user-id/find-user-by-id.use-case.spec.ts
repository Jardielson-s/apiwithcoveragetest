import { FindUserByIdUseCase } from './find-user-id.use-case'
import { ILoggerService } from '../../../shared/interfaces/ILoggerServices.interface'
import { IRepository } from '../../../shared/interfaces/IRepository.interface'
import { ICreateUser } from '../../../domain/interfaces/Icreate-user.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'
import {
  repositoryStub,
  serviceLoggerStub
} from '../../../shared/test/stub/repository.stub'

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
