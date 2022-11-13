import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { ISendEmail } from 'src/shared/interfaces/ISend-email.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import {
  repositoryStub,
  serviceLoggerStub
} from '../../../shared/test/stub/repository.stub'
import { CreateUserUseCase } from './create-user.use-case'

const stub = Object.freeze({
  send: jest.fn()
})
const sendEmailServiceStub = (): any => stub as unknown as ISendEmail

describe(CreateUserUseCase.name, () => {
  let useCase: IUseCase<any, any>
  let repository: IRepository<any>
  let loggerService: ILoggerService
  let sendEmailService: ISendEmail
  const params = {
    name: 'Jonh Doe',
    email: 'JonhDoe@gmail.com',
    password: 'JohnDoe1234'
  }

  beforeEach(() => {
    jest.clearAllMocks()
    loggerService = serviceLoggerStub()
    repository = repositoryStub()
    sendEmailService = sendEmailServiceStub()
    useCase = new CreateUserUseCase(repository, sendEmailService, loggerService)
  })

  it('should be defined', () => {
    expect(useCase).toBeDefined()
  })

  it('should be defined method execute', () => {
    expect(useCase.execute).toBeDefined()
  })

  it('should able method execute with success', async () => {
    const repositorySpyOn = jest.spyOn(repository, 'save')
    await useCase.execute('url', params)
    expect(repositorySpyOn).toHaveBeenCalled()
  })

  it('should able method execute with error', async () => {
    const error = new Error('User email already Exists')
    jest.spyOn(repository, 'findByEmail').mockResolvedValue(params.email)
    await expect(useCase.execute(params)).rejects.toThrow(error)
  })
})
