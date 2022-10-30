import { DataSource } from 'typeorm'
import { UserRepository } from './user.repository'

// for update typeorm with manager
const raw = () => {}

const stub = Object.freeze({
    manager: {
        save: jest.fn(),
        findOneBy: jest.fn(),
        update: jest.fn(() => raw),
        delete: jest.fn(),
    },
})

const userDataSourceStub = (): any => stub as unknown as DataSource

describe(UserRepository.name, () => {
    let userRepository: UserRepository
    let dataSource: DataSource
    beforeEach(() => {
        dataSource = userDataSourceStub()
        userRepository = new UserRepository(dataSource)
    })

    it('should be  defined', () => {
        expect(userRepository).toBeDefined()
    })

    it('should be execute save', async () => {
        const saveSpyOne = jest.spyOn(userRepository, 'save')

        await userRepository.save({
            name: 'John doe',
            email: 'john@gmail.com',
            password: 'john*123',
        })

        expect(saveSpyOne).toHaveBeenCalled()
    })

    it('should be execute findById', async () => {
        const findByIdSpyOne = jest.spyOn(userRepository, 'findById')

        await userRepository.findById('d51f33450af2400fa83e374b55573543')

        expect(findByIdSpyOne).toHaveBeenCalled()
    })

    it('should be execute findByEmail', async () => {
        const findByEmailSpyOne = jest.spyOn(userRepository, 'findByEmail')

        await userRepository.findByEmail('john@gmail.com')

        expect(findByEmailSpyOne).toHaveBeenCalled()
    })

    it('should be execute update', async () => {
        const updateSpyOne = jest.spyOn(userRepository, 'update')
        await userRepository.update({} as any, 'any-id')
        expect(updateSpyOne).toHaveBeenCalled()
    })

    it('should be execute delete', async () => {
        const updateSpyOne = jest.spyOn(userRepository, 'delete')
        await userRepository.delete('any-id')
        expect(updateSpyOne).toHaveBeenCalled()
    })
})
