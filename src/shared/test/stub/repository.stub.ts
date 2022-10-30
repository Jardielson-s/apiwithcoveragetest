import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'

const stub = Object.freeze({
    save: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
})

const stuLogger = Object.freeze({
    info: jest.fn(),
})

const stubUseCase = Object.freeze({
    execute: jest.fn(),
})
export const useCaseStub = () => stubUseCase as IUseCase<any>

export const serviceLoggerStub = (): any => stuLogger as ILoggerService

export const repositoryStub = () => stub as IRepository<any>
