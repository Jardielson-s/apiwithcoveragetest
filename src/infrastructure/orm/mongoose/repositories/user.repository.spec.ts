import { Model } from 'mongoose'
import { UserRepository } from './user.repository'

const stub = Object.freeze({
    create: jest.fn(),
    findById: jest.fn(),
    findOne: jest.fn(),
})

const repositoryStub = () => stub as unknown as Model<any>

describe(UserRepository.name, () => {
    let userRepository: UserRepository
    let model: Model<any>

    beforeEach(() => {
        model = repositoryStub()
        userRepository = new UserRepository(model)
    })

    it('should be defined', () => {
        expect(userRepository).toBeDefined()
    })

    it('should be defined methos save', async () => {
        const modelSpyOn = jest.spyOn(model, 'create')

        await userRepository.save({} as any)

        expect(modelSpyOn).toHaveBeenCalled()
    })

    it('should be defined methos findById', async () => {
        const modelSpyOn = jest.spyOn(model, 'findById')

        await userRepository.findById('d51f33450af2400fa83e374b55573543')

        expect(modelSpyOn).toHaveBeenCalled()
    })

    it('should be defined methos findByEmail', async () => {
        const modelSpyOn = jest.spyOn(model, 'findOne')

        await userRepository.findByEmail('email')

        expect(modelSpyOn).toHaveBeenCalled()
    })
})
