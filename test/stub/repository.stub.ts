import { IRepository } from '../../src/shared/interfaces/IRepository.interface'

const stub = Object.freeze({
    save: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
})

export const repositoryStub = () => stub as IRepository<any>
