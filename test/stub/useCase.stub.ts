import { IUseCase } from '../../src/shared/interfaces/IUseCase.interface'

const stub = Object.freeze({
    execute: jest.fn(),
})

export const useCaseStub = () => stub as IUseCase<any>
