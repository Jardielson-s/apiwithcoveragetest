import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'

const params = {
  id: 'any-id',
  name: 'Jonh Doe',
  email: 'JonhDoe@gmail.com',
  password: 'JohnDoe1234'
}
const stub = Object.freeze({
  save: jest.fn(() => params),
  findById: jest.fn(),
  findByEmail: jest.fn(),
  update: jest.fn(),
  delete: jest.fn()
})

const stuLogger = Object.freeze({
  info: jest.fn()
})

const stubUseCase = Object.freeze({
  execute: jest.fn()
})
export const useCaseStub = () => stubUseCase as IUseCase<any>

export const serviceLoggerStub = (): any => stuLogger as ILoggerService

export const repositoryStub = () => stub as unknown as IRepository<any>
