import { CreateUserEntity } from './create-user.entity'

describe(CreateUserEntity.name, () => {
    let entity: CreateUserEntity

    let params = {
        name: 'Jonh Doe',
        email: 'JonhDoe@gmail.com',
        password: 'JohnDoe1234',
    }

    beforeEach(() => {
        entity = new CreateUserEntity(params)
    })

    it('shoul be defined', () => {
        expect(entity).toBeDefined()
    })
})